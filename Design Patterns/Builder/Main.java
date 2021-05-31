package builder;

public class Main {

    public static void main(String[] args) {
	// write your code here

        Laptops_telescopic lpt1=new Laptops_telescopic("hp110",90000,"8GB","500GB");
        Laptops_telescopic2 lpt2=new Laptops_telescopic2("hp110",90000,"8GB","500GB");

        System.out.println(lpt1);
        System.out.println(lpt2);


        //Using builder

        Laptops.Builder builder=new Laptops.Builder("DellInspiron",90000,"8GB","1TB");
        Laptops.Builder builder1=new Laptops.Builder("Macbook pro 2020",280000,"8GB","256GB");
        Laptops lap1 = builder.SSD("Yes").build();
        Laptops lap2= builder1.SSD("Yes").Warranty("Yes").build();

        System.out.println(lap1);
        System.out.println(lap2);



    }
}
