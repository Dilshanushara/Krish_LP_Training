public class HundredHandler extends Handler{

    @Override
    public BankAccount Withdraw(BankAccount account) {
        int requestedAmount=account.getRemainAmountTOIssueNotes();

        int numberofNotesToIssued = requestedAmount / 100;
        if (numberofNotesToIssued > 0)
        {
            if (numberofNotesToIssued > 1)
            {
                System.out.println(numberofNotesToIssued+"  Hundred notes are Issued by Hundred Handler");
            }
            else
            {
                System.out.println(numberofNotesToIssued+" Hundrad note is Issued by Hundred Handler");
            }
        }
        int pendingAmountToBeProcessed = requestedAmount % 100;

        if (pendingAmountToBeProcessed > 0){
            account.setRemainAmountTOIssueNotes(pendingAmountToBeProcessed);
            sucessor.Withdraw(account);
        }

        return account;
    }

}
