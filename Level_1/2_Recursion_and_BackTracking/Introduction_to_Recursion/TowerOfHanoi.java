import java.util.Scanner;

public class TowerOfHanoi {
    public static void main(String[] args) throws Exception {
        // write your code here
        Scanner input = new Scanner(System.in);
        int num = input.nextInt(), t1 = input.nextInt(), t2 = input.nextInt(), t3 = input.nextInt();
        toh(num, t1, t2, t3);
        input.close();
    }

    public static void toh(int n, int t1id, int t2id, int t3id){
        if(n == 0){
            return;
        }
        toh(n-1, t1id, t3id, t2id);
        System.out.println(n+"["+t1id+" -> "+t2id+"]");
        toh(n-1, t3id, t2id, t1id);
    }
}
