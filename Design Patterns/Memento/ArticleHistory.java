import java.util.Stack;

//CareTaker class
public class ArticleHistory {
    Stack<ArticleMemento> history = new Stack<>();

    public void save(Article article) {
        history.push(article.save());
    }

    public void revert(Article article) {
        if (!history.isEmpty())
            article.revert(history.pop());
        else
            System.out.println("Cannot undo");


    }
}
