import java.util.ArrayList;
import java.util.Scanner;

public class GetStairPath {
    public static void main(String[] args) throws Exception {
        Scanner input = new Scanner(System.in);
        int n = input.nextInt();
        System.out.println(getStairPaths(n));
        input.close();
    }

    public static ArrayList<String> getStairPaths(int n) {
        ArrayList<String> res = new ArrayList<>();
        String op = "";
        helper(n, op, res);
        return res;
    }
    public static void helper(int n, String op, ArrayList<String> res) {
        if(n == 0){
            res.add(op);
            return;
        }
        if(n >= 1){
            helper(n-1, op+"1", res);
        }
        if(n >= 2){
            helper(n-2, op+"2", res);
        }
        if(n >=3 ){
            helper(n-3, op+"3", res);
        }
    }
}
