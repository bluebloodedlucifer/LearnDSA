import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.HashMap;
import java.util.Map;
import java.util.Stack;

public class PrefixEvaluationsAndConversions {
    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        String exp = br.readLine();
    
        // code
        Stack<String> infix = new Stack<String>();
        Stack<String> postfix = new Stack<String>();
        Stack<Integer> val = new Stack<Integer>();

        int n = exp.length();
        int i = n-1;

        Map<Character, Integer> mp = new HashMap<Character, Integer>();
        mp.put('+', 1);
        mp.put('-', 1);
        mp.put('*', 2);
        mp.put('/', 2);

        while(i >= 0){
            char ch = exp.charAt(i);

            if(ch <= '9' && ch >= '0'){
                val.push(ch - '0');
                infix.push(ch + "");
                postfix.push(ch + "");
            }else{
                eval(infix, postfix, val, ch);
            }
            i--;
        }
        System.out.println(val.peek());
        System.out.println(infix.peek());
        System.out.println(postfix.peek());
     }
     static void eval(Stack<String> infix, Stack<String> postfix, Stack<Integer> val, char op){
        int v1 = val.pop();
        int v2 = val.pop();
        int res = cal(v1, v2, op);
        val.push(res);

        String infix1 = infix.pop();
        String infix2 = infix.pop();
        String infixRes = ("(" + infix1 + op + infix2 +")");
        infix.push(infixRes);
        String postfix1 = postfix.pop();
        String postfix2 = postfix.pop();
        String postfixRes = postfix1 + postfix2 + op;
        postfix.push(postfixRes);
     }
     static int cal(int v1, int v2, char op){
         if(op == '+') return v1 + v2;
         else if(op == '-') return v1 - v2;
         else if(op == '*') return v1 * v2;
         else return v1/v2;
     }
}
