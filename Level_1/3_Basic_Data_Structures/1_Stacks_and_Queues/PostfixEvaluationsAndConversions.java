import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.HashMap;
import java.util.Map;
import java.util.Stack;

public class PostfixEvaluationsAndConversions {
    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        String exp = br.readLine();
    
        // code
        Stack<String> infix = new Stack<String>();
        Stack<String> prefix = new Stack<String>();
        Stack<Integer> val = new Stack<Integer>();

        int i = 0, n = exp.length();

        Map<Character, Integer> mp = new HashMap<Character, Integer>();
        mp.put('+', 1);
        mp.put('-', 1);
        mp.put('*', 2);
        mp.put('/', 2);

        while(i < n){
            char ch = exp.charAt(i);

            if(ch <= '9' && ch >= '0'){
                val.push(ch - '0');
                infix.push(ch + "");
                prefix.push(ch + "");
            }else{
                eval(infix, prefix, val, ch);
            }
            i++;
        }
        System.out.println(val.peek());
        System.out.println(infix.peek());
        System.out.println(prefix.peek());
     }
     static void eval(Stack<String> infix, Stack<String> prefix, Stack<Integer> val, char op){
        int v2 = val.pop();
        int v1 = val.pop();
        int res = cal(v1, v2, op);
        val.push(res);

        String infix2 = infix.pop();
        String infix1 = infix.pop();
        String infixRes = ("(" + infix1 + op + infix2 +")");
        infix.push(infixRes);
        String prefix2 = prefix.pop();
        String prefix1 = prefix.pop();
        String prefixRes = op + prefix1 + prefix2;
        prefix.push(prefixRes);
     }
     static int cal(int v1, int v2, char op){
         if(op == '+') return v1 + v2;
         else if(op == '-') return v1 - v2;
         else if(op == '*') return v1 * v2;
         else return v1/v2;
     }
}
