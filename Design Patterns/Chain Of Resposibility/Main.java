public class Main {

    public static void main(String[] args) {

        FiveThousandHandler fiveThousand=new FiveThousandHandler();
        OneThousandHandler oneThousand=new OneThousandHandler();
        FiveHundredHandler fiveHundred=new FiveHundredHandler();
        HundredHandler hundred=new HundredHandler();

        fiveThousand.setSucessor(oneThousand);
        oneThousand.setSucessor(fiveHundred);
        fiveHundred.setSucessor(hundred);

        BankAccount Amal=new BankAccount(902345351,3200);
        BankAccount John=new BankAccount(2021345671,8900);
        BankAccount Sunil=new BankAccount(909143761,10000);

        System.out.println(fiveThousand.Withdraw(Amal));
        System.out.println("===============================================");
        System.out.println(fiveThousand.Withdraw(John));
        System.out.println("===============================================");
        System.out.println(fiveThousand.Withdraw(Sunil));

    }
}
