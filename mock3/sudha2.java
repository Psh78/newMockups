import java.util.Scanner;

public class sudha2 {
    public static void main(String[] args) {
        
        Scanner sc = new Scanner(System.in);

        int tests = sc.nextInt();

        for(int test = 0; test < tests; test++)
        {
            int size = sc.nextInt();
            int [] arr = new int [size];

            int [] cost = new int[size];
            int costIndex = 0;

            int [] sell = new int[size];
            int sellIndex = 0;

            int [] maxi = new int[size];

            for(int i = 0; i < arr.length; i++)
            {
                arr[i] = sc.nextInt();
            }

            int k = sc.nextInt();

            for(int j = 0; j < arr.length-1; j++)
            {
                int sum1 = 0;
                int sum2 = 0;

                for(int l = 0; l <= j; l++)
                {
                    sum1 += arr[l];
                }
                cost[costIndex] = sum1;
                costIndex++;
                sum1 = 0;
                for(int m = j+1; m < arr.length; m++)
                {
                    sum2 += arr[m];
                }
                sell[sellIndex] = sum2;
                sellIndex++;
                sum2 = 0;
            }

            for(int testi = 0; testi < maxi.length; testi++)
            {
                maxi[testi] = sell[testi] - cost[testi];
            }

            int large = -1;
            for(int a = 0; a < maxi.length; a++)
            {
                if(maxi[a] > large)
                {
                    large = maxi[a];
                }
            }
            System.out.println(large);
        }
        sc.close();
    }
}
