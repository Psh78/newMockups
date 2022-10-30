import java.util.Scanner;

class ja
{
    public static void main(String[] args) {
        
        Scanner sc = new Scanner(System.in);

        int p = sc.nextInt();

        int [] s = new int [p];

        for(int i = 0; i < p; i++)
        {
            s[i] = sc.nextInt();
        }
        for(int i =0; i < p; i++)
        {
            System.out.println(s[i]);
        }

    }
}