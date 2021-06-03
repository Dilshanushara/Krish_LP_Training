public class FiveHundredHandler extends Handler{

    @Override
    public BankAccount Withdraw(BankAccount account) {
        int requestedAmount=account.getRemainAmountTOIssueNotes();

        int numberofNotesToIssued = requestedAmount / 500;
        if (numberofNotesToIssued > 0)
        {
            if (numberofNotesToIssued > 1)
            {
                System.out.println(numberofNotesToIssued+" Five Hundred notes are Issued by Five hundred Handler");
            }
            else
            {
                System.out.println(numberofNotesToIssued+" Five Hundrad note is Issued by Five hundred Handler");
            }
        }
        int pendingAmountToBeProcessed = requestedAmount % 500;

        if (pendingAmountToBeProcessed > 0){
            account.setRemainAmountTOIssueNotes(pendingAmountToBeProcessed);
            sucessor.Withdraw(account);

        }


        return account;
    }
}
