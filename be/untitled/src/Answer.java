public class Answer implements Cloneable {
    int number;
    Question question;

    public Answer(int i) {
        this.number = i;
    }

    public Object clone()throws CloneNotSupportedException{
        return super.clone();
    }

    @Override
    public String toString() {
        return "Answer{" +
                "number=" + number +
                '}';
    }
}
