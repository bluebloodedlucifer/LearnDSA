import java.util.ArrayList;
import java.util.Scanner;

/**
 * GetSubsequences
 */
public class GetSubsequences {

    public static void main(String[] args) throws Exception {
        Scanner input = new Scanner(System.in);
        String str = input.next();
        System.out.println(gss(str));
        input.close();
    }

    public static ArrayList<String> gss(String str) {
        ArrayList<String> res = new ArrayList<>();
        String ip = str, op = "";
        helper(ip, op, res);
        return res;
    }
    public static void helper(String ip, String op, ArrayList<String> res){
        if(ip.length() == 0){
            res.add(op);
            return;
        }
        char ch = ip.charAt(0);
        ip = ip.substring(1);
        helper(ip, op, res);
        helper(ip, op+ch, res);
        return;
    }
}