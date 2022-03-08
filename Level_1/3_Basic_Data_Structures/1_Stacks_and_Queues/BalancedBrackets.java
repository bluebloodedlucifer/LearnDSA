import java.util.Scanner;
import java.util.Stack;

/**
 * BalancedBrackets
 */
public class BalancedBrackets {

    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        String s = input.nextLine();
        System.out.println(balancedBrackets(s));
        input.close();
    }
    public static boolean balancedBrackets(String s){
        Stack<Character> st = new Stack<>();
        
        for(int i=0; i<s.length(); i++){
            char ch = s.charAt(i);
            if(ch == ')' || ch == '}' || ch == ']'){
                if(st.empty()) return false;
            }

            if(ch == '(' || ch == '{' || ch == '[') st.push(ch);
            else{
                if(ch == ')' && st.peek() == '(') st.pop();
                else if(ch == '}' && st.peek() == '{') st.pop();
                else if(ch == ']' && st.peek() == '[') st.pop();
            }
        }
        return st.size() < 1;
    }
}