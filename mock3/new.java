import java.util.Scanner;

class Sudha
{
    public static void main(String[] args) {
        
        Scanner sc = new Scanner(System.in);

        String [] arr = new String [3];
        int [] size = new int [3];
        for(int i = 0; i < 3; i++)
        {
            arr[i] = sc.next();
        }

        for(int i = 0; i < arr.length; i++)
        {
            int sum = 0;
            String temp = arr[i];
            for(int j = 0; j < temp.length(); j++)
            {
                sum += temp.charAt(j);
            }
            size[i] = sum;
            sum = 0;
        }

        //bbac abcb acbb
        if(size[0] == size[1] && size[1] == size[2])
        {
            System.out.println("YES");
        }
        else
        {
            System.out.println("NO4");
        }
    }
}