import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.Stack;

public class LargestAreaHistogram {
    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
    
        int n = Integer.parseInt(br.readLine());
        int[] a = new int[n];
        for(int i = 0; i < n; i++){
           a[i] = Integer.parseInt(br.readLine());
        }
        System.out.println(LAH(a));
        // code

     }

     public static int LAH(int[] arr) {
         int maxArea = Integer.MIN_VALUE;

         int[] left = NSL(arr);
         int[] right = NSR(arr);
         for(int i=0; i<arr.length; i++){
             int area = arr[i]*(right[i] - left[i] - 1);
             if(area > maxArea){
                 maxArea = area;
             }
         }
         return maxArea;
     }
     public static int[] NSL(int[] arr){
        int[] temp = new int[arr.length];
        Stack<Integer> st = new Stack<>();

        int pseudoIndex = -1;

        for(int i=0; i<arr.length; i++){
            while(!st.empty() && arr[i] <= arr[st.peek()]){
                st.pop();
            }
            if(st.empty()){
                temp[i] = pseudoIndex;
            }else{
                temp[i] = st.peek();
            }
            st.push(i);
        }
        return temp;
     }
     public static int[] NSR(int[] arr){
        int[] temp = new int[arr.length];
        Stack<Integer> st = new Stack<>();

        int pseudoIndex = arr.length;

        for(int i=arr.length -1 ; i>=0; i--){
            while(!st.empty() && arr[i] <= arr[st.peek()]){
                st.pop();
            }
            if(st.empty()){
                temp[i] = pseudoIndex;
            }else{
                temp[i] = st.peek();
            }
            st.push(i);
        }
        return temp;
     }
}
