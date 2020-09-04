
/*===========================================IMPORTS===========================================*/
%{
    let CPrimitivo = require('../AST/Expresiones/Primitivo');
    let CAritmetica = require('../AST/Expresiones/Aritmetica');
    let CLExpresion = require('../AST/Expresiones/LExpresion');
%}


/*===========================================LEXICO===========================================*/
%lex
%%

"*"     return 'tk_mul'
"/"     return 'tk_div'
"-"     return 'tk_res'
"+"     return 'tk_sum'

"("     return 'tk_pabre'
")"     return 'tk_pcierra'

[0-9]+"."[0-9]+     %{  return 'tk_decimal';  %}
[0-9]+              %{  return 'tk_entero';  %}

[ \t\r\n\f] %{  /*Los Ignoramos*/   %}
<<EOF>>     %{  return 'EOF';   %}
.           %{  /*Reportar Error*/  %}

/lex


/*===========================================SINTACTICO===========================================*/

%left tk_sum tk_res
%left tk_mul tk_div
%left tk_pabre tk_pcierra


%start S
%% 

S:EXP EOF { $$ = new CLExpresion.LExpresion($1,yylineno); return $$.operar(); };

EXP: tk_pabre EXP tk_pcierra    {  $$ = $2; }
    |EXP tk_div EXP             {  $$ = new CAritmetica.Aritmetica($1,$3,CAritmetica.Aritmetica.tipo_a.DIVISION,yylineno); }
    |EXP tk_mul EXP             {  $$ = new CAritmetica.Aritmetica($1,$3,CAritmetica.Aritmetica.tipo_a.MULTIPLICACION,yylineno); }
    |EXP tk_sum EXP             {  $$ = new CAritmetica.Aritmetica($1,$3,CAritmetica.Aritmetica.tipo_a.SUMA,yylineno); }
    |EXP tk_res EXP             {  $$ = new CAritmetica.Aritmetica($1,$3,CAritmetica.Aritmetica.tipo_a.RESTA,yylineno); }
    |tk_decimal                 {  $$ = new CPrimitivo.Primitivo(CPrimitivo.Primitivo.tipo_p.DOUBLE,yytext,yylineno); }
    |tk_entero                  {  $$ = new CPrimitivo.Primitivo(CPrimitivo.Primitivo.tipo_p.INT,yytext,yylineno); };