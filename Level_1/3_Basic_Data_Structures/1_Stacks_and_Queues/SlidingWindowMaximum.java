import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.Deque;
import java.util.LinkedList;

public class SlidingWindowMaximum {
   public static void main(String[] args) throws Exception {
      BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
  
      int n = Integer.parseInt(br.readLine());
      int[] a = new int[n];
      for(int i = 0; i < n; i++){
         a[i] = Integer.parseInt(br.readLine());
      }
      int k = Integer.parseInt(br.readLine());
  
      // code
      int i = 0, j = 0;
      Deque<Integer> dq = new LinkedList<Integer>();
      dq.addLast(a[j++]);
  
      while(j < n){
         // dq.addLast(a[j]);

         while(!dq.isEmpty() && dq.getLast() <= a[j]){
            dq.removeLast();
         }
         dq.addLast(a[j]);
         if(j - i + 1 < k){
            j++;
         }else if(j - i + 1 == k){
            System.out.println(dq.getFirst());
            if(a[i] == dq.getFirst())
               dq.removeFirst();
            i++;
            j++;
         }
      }
   } 
}

