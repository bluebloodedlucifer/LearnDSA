import java.util.Scanner;

public class PrintMazePathsWithJumps {
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
        for(int i=1; i<=dc; i++){
            printMazePaths(sr, sc, dr, dc-i, op+"h"+i);
        }
        for(int i=1; i<=dr; i++){
            printMazePaths(sr, sc, dr-i, dc, op+"v"+i);
        }
        for(int i=1; i<=dc && i<=dr; i++){
            printMazePaths(sr, sc, dr-i, dc-i, op+"d"+i);
        }
        
    }
}
