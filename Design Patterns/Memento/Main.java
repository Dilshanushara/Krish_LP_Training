public class Main {

    public static void main(String[] args) {
	// write your code here
        ArticleHistory articleHistory =new ArticleHistory();
        Article a1 =new Article(1,"design pattern","example content");
        articleHistory.save(a1);
        System.out.println(a1);

        a1.setContent("Welcome to the design pattern article");
        articleHistory.save(a1);
        System.out.println(a1);

        a1.setContent("Today let's learn about Memento design pattern");
        articleHistory.save(a1);
        System.out.println(a1);

        articleHistory.revert(a1);
        System.out.println(a1);

        articleHistory.revert(a1);
        System.out.println(a1);

        articleHistory.revert(a1);
        System.out.println(a1);

    }
}
