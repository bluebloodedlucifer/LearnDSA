import java.util.Scanner;

public class PrintPermutations {
    public static void main(String[] args) throws Exception {
        Scanner input = new Scanner(System.in);
        String ip = input.next();
        String op = "";
        printPermutations(ip, op);
        input.close();
    }

    public static void printPermutations(String ip, String op) {
        if(ip.length() == 0){
            System.out.println(op);
            return;
        }
        for(int i=0; i<ip.length(); i++){
            char ch = ip.charAt(i);
            String nip = ip.substring(0,i)+ip.substring(i+1);
            printPermutations(nip, op+ch);
        }

    }
}
