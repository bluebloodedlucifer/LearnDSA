import java.util.Scanner;

public class PrintEncodings {

    public static void main(String[] args) throws Exception {
        Scanner input = new Scanner(System.in);
        String ip = input.next();
        printEncodings(ip);
        input.close();

    }

    public static void printEncodings(String str) {
        String op = "";
        helper(str, op);
    }
    public static void helper(String ip, String op) {
        if(ip.length() == 0){
            System.out.println(op);
            return;
        }
        int num = ip.charAt(0) - '0';
        char ch = (char)(num+'a'-1);
        if(num > 0 && num <= 9){
            helper(ip.substring(1), op+ch);
        }
        if(ip.length() > 1){
            String str2 = ip.substring(0, 2);
            int num2 = Integer.parseInt(str2);
            char ch2 = (char)(num2+'a'-1);
            if(num2 > 9 && num2 < 27){
                helper(ip.substring(2), op+ch2);
            }
        }
    }
}
