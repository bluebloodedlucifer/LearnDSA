import java.util.Scanner;

public class PrintMazePaths {
    public static void main(String[] args) throws Exception {
        Scanner input = new Scanner(System.in);
        int n = input.nextInt(), m = input.nextInt();
        String op = "";
        printMazePaths(1, 1, n, m, op);
        input.close();
    }

    // sr - source row
    // sc - source column
    // dr - destination row
    // dc - destination column
    public static void printMazePaths(int sr, int sc, int dr, int dc, String op) {
        if(sr == dr && sc == dc){
            System.out.println(op);
            return;
        }
        if(dc>1) printMazePaths(sr, sc, dr, dc-1, op+"h");
        if(dr>1) printMazePaths(sr, sc, dr-1, dc, op+"v");
    }


}
