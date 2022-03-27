import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.Stack;

public class CelebrityProblem {
    public static void main(String[] args) throws Exception {
        // write your code here
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int n = Integer.parseInt(br.readLine());
        int[][] arr = new int[n][n];

        for (int j = 0; j < n; j++) {
            String line = br.readLine();
            for (int k = 0; k < n; k++) {
                arr[j][k] = line.charAt(k) - '0';
            }
        }

        findCelebrity(arr);
    }

    public static void findCelebrity(int[][] arr) {
        // if a celebrity is there print it''s index (not position), if there is not then print "none"
        Stack<Integer> st = new Stack<>();

        for(int i = 0; i<arr.length; i++) st.push(i);

        while(st.size() != 1){
            int cd1 = st.pop();
            int cd2 = st.pop();

            if(arr[cd1][cd2] == 1) st.push(cd2);
            else st.push(cd1);
        }
        int flag = 1;
        int celebCandidate = st.pop();
        
        for(int i = 0; i<arr.length; i++){
            if(i == celebCandidate) continue;
            else{
                if(arr[i][celebCandidate] == 0){
                    flag = 0;
                }
            }
        }
        for(int i = 0; i<arr.length; i++){
            if(i == celebCandidate) continue;
            else{
                if(arr[celebCandidate][i] == 1){
                    flag = 0;
                }
            }
        }
        if(flag == 1) System.out.println(celebCandidate);
        else System.out.println("none");
    }
}
