import java.util.ArrayList;
import java.util.Scanner;

public class GetKPC {
    static String[] sample = {".;", "abc", "def", "ghi", "jkl", "mno", "pqrs", "tu", "vwx", "yz"};
    public static void main(String[] args) throws Exception {

        Scanner input = new Scanner(System.in);
        String str = input.next();
        
        System.out.println(getKPCSequence(str));
        input.close();

    }

    static ArrayList<String> getKPCSequence(String str) {
        ArrayList<String> res = new ArrayList<>();

        String ip = str;
        String op = "";
        helper(ip, op, res);
        return res;
    }
    public static void helper(String ip, String op, ArrayList<String> res){
        if(ip.length() == 0){
            res.add(op);
            return;
        }
        int ch = ip.charAt(0) - '0';
        ip = ip.substring(1);

        for(int i =0 ; i<sample[ch].length(); i++){
            helper(ip, op + sample[ch].charAt(i) , res);
        }
        return;
    }
}
