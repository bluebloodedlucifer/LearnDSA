import java.util.Scanner;
import java.util.Stack;

/**
 * DuplicateBrackets
 */
public class DuplicateBrackets {

    public static void main(String[] args) throws Exception {
        Scanner input = new Scanner(System.in);
        String str = input.nextLine();
        Stack<Character> st = new Stack<>();
        
        for(int i = 0; i < str.length(); i++){
            char ch = str.charAt(i);
            if(ch == ')'){
                if(st.peek() == '('){
                    System.out.println("true");
                    input.close();
                    return;
                }else{
                    while(st.peek() != '('){
                        st.pop();
                    }
                    st.pop();
                }
            }else{
                st.push(ch);
            }
        }
        System.out.println("false");
        input.close();
    }
}

