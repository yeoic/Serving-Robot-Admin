package DefaultProject.SpringVue;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
public class GreetingController {

    @GetMapping("api/greeting")
    public String greeting() {
        return "안녕 바보야";
    }

    @GetMapping("/foods")
    public List<Food> getFoods() {
        List<Food> foods = new ArrayList<>();
        foods.add(new Food("Frozen Yogurt", 159, 6.0, 24, 4.0, 87, "14%", "1%"));
        // add more foods
        return foods;
    }
}
