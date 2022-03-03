import java.util.ArrayList;
import java.util.Scanner;

public class GetMazePath {
    public static void main(String[] args) throws Exception {
        Scanner input = new Scanner(System.in);
        int n = input.nextInt(), m = input.nextInt();
        System.out.println(getMazePaths(1, 1, n, m));
        input.close();
    }

    // sr - source row
    // sc - source column
    // dr - destination row
    // dc - destination column
    public static ArrayList<String> getMazePaths(int sr, int sc, int dr, int dc) {
        ArrayList<String> res = new ArrayList<>();
        String op = "";
        helper(dr-sr, dc-sc, op, res);
        return res;
    }
    public static void helper(int n, int m, String op, ArrayList<String> res){
        if(n == 0 && m == 0){
            res.add(op);
            return;
        }
        if(m > 0){
            helper(n, m-1, op+"h", res);
        }
        if(n > 0){
            helper(n-1, m, op+"v", res);
        }
    }
}
