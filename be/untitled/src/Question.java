import java.util.ArrayList;
import java.util.List;

public class Question implements Cloneable {
    public int number;
    public List<Answer> answers = new ArrayList<>();

    public Question(int i) {
        this.number = i;
    }

    public Object clone()throws CloneNotSupportedException{
        return super.clone();
    }

    @Override
    public String toString() {
        return "Question{" +
                "number=" + number +
                ", answers=" + answers +
                '}';
    }
}
