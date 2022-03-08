import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.Stack;

public class StockSpan {
    public static void display(int[] a){
        StringBuilder sb = new StringBuilder();
    
        for(int val: a){
          sb.append(val + "\n");
        }
        System.out.println(sb);
      }
    
    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
    
        int n = Integer.parseInt(br.readLine());
        int[] a = new int[n];
        for(int i = 0; i < n; i++){
           a[i] = Integer.parseInt(br.readLine());
        }
    
        int[] span = solve(a);
        display(span);
     }
    
      public static int[] solve(int[] arr){
        // solve
        Stack<Integer> st = new Stack<>();
        int[] res = new int[arr.length];
        for(int i=0; i<arr.length; i++){
            while(!st.empty() && arr[st.peek()] < arr[i]){
              st.pop();
            }
            if(st.empty()){
              res[i] = i+1;
            }else{
              res[i] = i - st.peek();
            }
            st.push(i);
        }
        return res;
      }
    
    }
