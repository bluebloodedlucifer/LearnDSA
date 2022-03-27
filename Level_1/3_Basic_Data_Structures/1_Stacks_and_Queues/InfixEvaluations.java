import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.HashMap;
import java.util.Map;
import java.util.Stack;

public class InfixEvaluations {
    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        String exp = br.readLine();
    
        // code
        Stack<Integer> val = new Stack<>();
        Stack<Character> opr= new Stack<>();

        Map<Character, Integer> mp = new HashMap<Character, Integer>();
        mp.put('+', 1);
        mp.put('-', 1);
        mp.put('*', 2);
        mp.put('/', 2);

        int n = exp.length(), i = 0;

        while(i < n){
            char ch = exp.charAt(i);
            

            if(ch <= '9' && ch >= '0'){
                val.push(ch - '0');
            }else if(ch == '('){
                opr.push(ch);
            }else if( ch == '+' || ch == '-' || ch == '*' || ch == '/'){
                while(!opr.isEmpty() && opr.peek()!= '(' && mp.get(opr.peek()) >= mp.get(ch) ){
                    eval(val, opr);
                }
                opr.push(ch);
            }else if(ch == ')'){
                while(opr.peek() != '('){
                    eval(val, opr);
                }
                opr.pop();
            }
            i++;
        }
        while(!opr.isEmpty()){
            eval(val, opr);
        }
        System.out.println(val.peek());
        
     }
     static void eval(Stack<Integer> val, Stack<Character> opr){
         int v2 = val.pop();
         int v1 = val.pop();
         char op = opr.pop();
         int res = cal(v1, v2, op);
         val.push(res);
     }
     static int cal(int v1, int v2, char ch){
         if(ch == '+') return v1 + v2;
         else if(ch == '-') return v1 - v2;
         else if(ch == '*') return v1 * v2;
         else return v1/v2;
     }
}

// 2 + 6 * 4 / 8 - 3