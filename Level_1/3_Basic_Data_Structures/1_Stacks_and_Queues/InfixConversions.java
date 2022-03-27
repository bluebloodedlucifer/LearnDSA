import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.HashMap;
import java.util.Map;
import java.util.Stack;

public class InfixConversions {
    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        String exp = br.readLine();
    
        // code
        Stack<String> prefix = new Stack<String>();
        Stack<String> postfix = new Stack<String>();
        Stack<Character> opr = new Stack<Character>();

        Map<Character, Integer> mp = new HashMap<Character, Integer>();
        mp.put('+', 1);
        mp.put('-', 1);
        mp.put('*', 2);
        mp.put('/', 2);

        int i = 0, n = exp.length();

        while(i < n){
            char ch = exp.charAt(i);
            if(ch == '('){
                opr.push(ch);
            }
            else if((ch <= '9' && ch >= '0') || (ch <= 'z' && ch >= 'a') || (ch <= 'Z' && ch >= 'A')){
                prefix.push(ch + "");
                postfix.push(ch + "");
            }else if(ch == '+' || ch == '-' || ch == '*' || ch == '/'){
                while(!opr.isEmpty() && opr.peek() != '(' && mp.get(opr.peek()) >= mp.get(ch)){
                    eval(prefix, postfix, opr);
                }
                opr.push(ch);
            }else{
                while(opr.peek() != '('){
                    eval(prefix, postfix, opr);
                }
                opr.pop();
            }
            i++;
        }
        while(!opr.isEmpty()){
            eval(prefix, postfix, opr);
        }
        System.out.println(postfix.peek());
        System.out.println(prefix.peek());
        
     }
     static void eval(Stack<String> prefix, Stack<String> postfix, Stack<Character> opr){
         char op = opr.pop();

         String prev2 = prefix.pop();
         String prev1 = prefix.pop();
         String resPre = op + prev1 + prev2;
         prefix.push(resPre);

         String postv2 = postfix.pop();
         String postv1 = postfix.pop();
         String resPost = postv1 + postv2 + op;
         postfix.push(resPost);
     }
}
