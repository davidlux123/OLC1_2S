
/*===========================================IMPORTS===========================================*/
%{
    let CEntorno = require('../AST/Entorno/Entorno');

    let CPrimitivo = require('../AST/Expresiones/Primitivo');
    let CAritmetica = require('../AST/Expresiones/Aritmetica');
    let CVariable = require('../AST/Expresiones/Variable');

    let CListaInstruccion = require('../AST/Instrucciones/ListaInstruccion');
    let CAsignacion = require('../AST/Instrucciones/Asignacion');
    let CDeclaracion = require('../AST/Instrucciones/Declaracion');
    let CRecuperacion = require('../AST/Instrucciones/Recuperacion');
    let CPrint = require('../AST/Instrucciones/Print');

    let CErrores=require('../AST/Errores');
    let CNodoError=require('../AST/NodoError');
%}


/*===========================================LEXICO===========================================*/
%lex
%%

"var"   return 'tk_var'
"print" return 'tk_print'

"*"     return 'tk_mul'
"/"     return 'tk_div'
"-"     return 'tk_res'
"+"     return 'tk_sum'

";"     return 'tk_pyc'
"="     return 'tk_asig'

"("     return 'tk_pabre'
")"     return 'tk_pcierra'

[0-9]+"."[0-9]+             %{  return 'tk_decimal';  %}
[0-9]+                      %{  return 'tk_entero';  %}
[a-zA-Z\_][a-zA-Z0-9\_]*    %{  return 'tk_id';  %}

[ \t\r\n\f] %{  /*Los Ignoramos*/   %}

<<EOF>>     %{  return 'EOF';   %}

.           CErrores.Errores.add(new CNodoError.NodoError("Lexico","No se esperaba el caracter: "+yytext,yylineno))

/lex


/*===========================================SINTACTICO===========================================*/

%left tk_sum tk_res
%left tk_mul tk_div
%left tk_pabre tk_pcierra


%start S
%% 

S:LINS EOF { $$=new CListaInstruccion.ListaInstruccion($1,yylineno); return $$.ejecutar(new CEntorno.Entorno()); };


LINS:LINS INS   {   $$=$1; $$.push($2);    }
    |INS        {   $$=new Array(); $$.push($1);   };


INS: DEC    {   $$=$1;  }
    |ASIG   {   $$=$1;  }
    |PRINT  {   $$=$1;  }
    |error  {   $$=new CRecuperacion.Recuperacion(yylineno);    };


PRINT:tk_print tk_pabre EXP tk_pcierra tk_pyc   {   $$=new CPrint.Print($3,yylineno);  };


DEC: tk_var tk_id tk_asig EXP tk_pyc {   $$=new CDeclaracion.Declaracion($2,$4,yylineno);   };


ASIG:tk_id tk_asig EXP tk_pyc   {   $$=new CAsignacion.Asignacion($1,$3,yylineno);  };


EXP: tk_pabre EXP tk_pcierra    {  $$ = $2; }
    |EXP tk_div EXP             {  $$ = new CAritmetica.Aritmetica($1,$3,CAritmetica.Aritmetica.tipo_a.DIVISION,yylineno); }
    |EXP tk_mul EXP             {  $$ = new CAritmetica.Aritmetica($1,$3,CAritmetica.Aritmetica.tipo_a.MULTIPLICACION,yylineno); }
    |EXP tk_sum EXP             {  $$ = new CAritmetica.Aritmetica($1,$3,CAritmetica.Aritmetica.tipo_a.SUMA,yylineno); }
    |EXP tk_res EXP             {  $$ = new CAritmetica.Aritmetica($1,$3,CAritmetica.Aritmetica.tipo_a.RESTA,yylineno); }
    |tk_decimal                 {  $$ = new CPrimitivo.Primitivo(CPrimitivo.Primitivo.tipo_p.DOUBLE,yytext,yylineno); }
    |tk_entero                  {  $$ = new CPrimitivo.Primitivo(CPrimitivo.Primitivo.tipo_p.INT,yytext,yylineno); }
    |tk_id                      {  $$ = new CVariable.Variable(yytext,yylineno); };