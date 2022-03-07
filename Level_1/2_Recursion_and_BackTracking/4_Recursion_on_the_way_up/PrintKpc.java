import java.util.Scanner;

/**
 * PrintKpc
 */
public class PrintKpc {

    static String[] codes = {".;", "abc", "def", "ghi", "jkl", "mno", "pqrs", "tu", "vwx", "yz"};
    public static void main(String[] args) throws Exception {
        Scanner input = new Scanner(System.in);
        String ip = input.next();
        String op = "";
        printSS(ip, op);
        input.close();
    }

    public static void printSS(String ip, String op) {
        
        if(ip.length() == 0){
            System.out.println(op);
            return;
        }
        char ch = ip.charAt(0);
        ip = ip.substring(1);
        for(int i=0; i<codes[ch -'0'].length(); i++){
            printSS(ip, op + codes[ch -'0'].charAt(i));
        }
    }
}