package stepdefinition;



import java.util.List;
import java.util.Random;

import org.openqa.selenium.Alert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class StepDefinition {
	
	WebDriver driver;
	
	static String getAlphaNumericString(int n)
    {
  
        // lower limit for LowerCase Letters
        int lowerLimit = 97;
  
        // lower limit for LowerCase Letters
        int upperLimit = 122;
  
        Random random = new Random();
  
        // Create a StringBuffer to store the result
        StringBuffer r = new StringBuffer(n);
  
        for (int i = 0; i < n; i++) {
  
            // take a random value between 97 and 122
            int nextRandomChar = lowerLimit+ (int)(random.nextFloat()* (upperLimit - lowerLimit + 1));
  
            // append a character at the end of bs
            r.append((char)nextRandomChar);
        }
  
        // return the resultant string
        return r.toString();
    }
	
	@Given("User navigates to uniform website")
	public void user_navigates_to_uniform_website() {
		System.setProperty("webdriver.chrome.driver" ,".\\lib\\chromedriver.exe");
		driver=new ChromeDriver();
		driver.get("http://uniformm1.upskills.in/admin/index.php?route=common/login");
		driver.manage().window().maximize();
	}

	@When("User enters {string} and {string}")
	public void user_enters_and(String string, String string2) {
		driver.findElement(By.id("input-username")).sendKeys(string);
		driver.findElement(By.id("input-password")).sendKeys(string2);
	}

	@When("User clicks on login button")
	public void user_clicks_on_login_button() {
		driver.findElement(By.xpath("//button[@type='submit']")).click();
	}

	@Then("Dashboard is displayed")
	public void dashboard_is_displayed() {
	    System.out.println("Sucess!!!");
	}

	@Given("User navigates to marketing section")
	public void user_navigates_to_marketing_section() {
		Actions action=new Actions(driver);
		WebElement share=driver.findElement(By.xpath("//li[@id='customer']/following-sibling::li"));
		action.moveToElement(share).build().perform();
		driver.findElement(By.xpath("//li[@id='customer']/following-sibling::li/ul/li/a")).click();
	}

	@When("User enters valid {string} in Campaign Name input box")
	public void user_enters_valid_in_Campaign_Name_input_box(String string) {
	    driver.findElement(By.id("input-name")).sendKeys(string);
	}

	@When("Clicks on filter button")
	public void clicks_on_filter_button() {
	    driver.findElement(By.xpath("//button[@id='button-filter']")).click();
	}

	@Then("Campaign Name along with all details should appear")
	public void campaign_Name_along_with_all_details_should_appear() throws InterruptedException {
	    String c_name=driver.findElement(By.xpath("//tbody/tr/td[2]")).getText();
	    String code=driver.findElement(By.xpath("//tbody/tr/td[3]")).getText();
	    System.out.println("Campaign Name: "+c_name);
	    System.out.println("Code : "+code);
	    Thread.sleep(3000);
	    driver.quit();
	    
    }

	@When("User enters valid {string} in Tracking Code input box")
	public void user_enters_valid_in_Tracking_Code_input_box(String string) {
		driver.findElement(By.id("input-code")).sendKeys(string);
	}
	
	@When("User enters valid {string} in Date Added input box")
	public void user_enters_valid_in_Date_Added_input_box(String string) {
		driver.findElement(By.xpath("//input[@name='filter_date_added']")).sendKeys(string);
	}

	@When("User clicks on add button icon")
	public void user_clicks_on_add_button_icon() {
	    driver.findElement(By.xpath("//a[@data-original-title='Add New']")).click();
	}

	@When("provides valid Campaign Name inside the add button popup")
	public void provides_valid_Campaign_Name_inside_the_add_button_popup() throws InterruptedException {
		int xyz=(int)(Math.random()*32);
		if(xyz==0)
			xyz=1;
		String test=getAlphaNumericString(xyz);
		driver.findElement(By.id("input-name")).sendKeys(test);
		Thread.sleep(3000);
	}

	@When("Clicks on save button")
	public void clicks_on_save_button() {
	    driver.findElement(By.xpath("//button[@data-original-title='Save']")).click();
	}

	@Then("the data must be added to marketing section list followed by sucess message")
	public void the_data_must_be_added_to_marketing_section_list_followed_by_sucess_message() {
	    String msg=driver.findElement(By.xpath("//div[@class='alert alert-success']")).getText();
	    System.out.println(msg);
	}
	
	@When("user selects a random checkbox")
	public void user_selects_a_random_checkbox() throws InterruptedException {
//	    List<WebElement> rows=driver.findElements(By.tagName("tr"));
//	    int size=rows.size();
//	    System.out.println("Size of list:"+size);
	    int rnd=(int)((Math.random()*(20))+1);
//	    System.out.println("Random Number:"+rnd);
	    String newXpath="//tbody/tr["+String.valueOf(rnd)+"]/td/input";
	    driver.findElement(By.xpath(newXpath)).click();
	    Thread.sleep(3000);
	}

	@When("Clicks on delete icon")
	public void clicks_on_delete_icon() {
	    driver.findElement(By.xpath("//button[@data-original-title='Delete']")).click();
	}
	
	@When("Click Yes on the popup")
	public void click_Yes_on_the_popup() throws InterruptedException {
		Alert alert = driver.switchTo().alert();
		Thread.sleep(1000);
		alert.accept();
	}

	@Then("the data must be deleted and sucess message should appear")
	public void the_data_must_be_deleted_and_sucess_message_should_appear() {
		String msg=driver.findElement(By.xpath("//div[@class='alert alert-success']")).getText();
	    System.out.println(msg);
	}
	
	@When("User clicks on the edit button of a random row")
	public void user_clicks_on_the_edit_button_of_a_random_row() {
		int rnd=(int)((Math.random()*(20))+1);
		String newXpath="//tbody/tr["+String.valueOf(rnd)+"]/td[7]/a";
		driver.findElement(By.xpath(newXpath)).click();;	
	}

	@When("Enters valid {string} and {string}")
	public void enters_valid_and(String string, String string2) throws InterruptedException {
		driver.findElement(By.id("input-name")).clear();
		Thread.sleep(2000);
		driver.findElement(By.id("input-name")).sendKeys(string);
		driver.findElement(By.xpath("//input[@id='input-code']")).clear();
		driver.findElement(By.xpath("//input[@id='input-code']")).sendKeys(string2);
	}

	@Then("the row must be edited and added to database along with proper massage")
	public void the_row_must_be_edited_and_added_to_database_along_with_proper_massage() {
		String msg=driver.findElement(By.xpath("//div[@class='alert alert-success']")).getText();
	    System.out.println(msg);
	    //I want to implement search functionality again with different input
	}
	
	@Given("User navigates to Gift Voucher Themes Section")
	public void user_navigates_to_Gift_Voucher_Themes_Section() throws InterruptedException {
	    driver.findElement(By.xpath("//*[@id='sale']")).click();
	    driver.findElement(By.xpath("//*[@id='sale']/ul/li[4]")).click();
	    //driver.findElement(By.xpath("//*[@id='sale']/ul/li[4]/ul/li[2]/a")).click();
	    String link=driver.findElement(By.xpath("//*[@id='sale']/ul/li[4]/ul/li[2]/a")).getAttribute("href");
	    driver.navigate().to(link);
	    Thread.sleep(5000);
	}

	@When("provides valid voucher theme name along with image")
	public void provides_valid_voucher_theme_name_along_with_image() throws InterruptedException {
		int xyz=(int)(Math.random()*32);
		if(xyz==0)
			xyz=1;
		String test=getAlphaNumericString(xyz);
		driver.findElement(By.xpath("//*[@id='form-theme-voucher']/div[1]/div/div/input")).sendKeys(test);
		driver.findElement(By.xpath("//*[@id='thumb-image']/img")).click();
		driver.findElement(By.id("button-image")).click();
//		Alert alert = driver.switchTo().alert();
//		Thread.sleep(1000);
		WebElement clk=driver.findElement(By.xpath("//*[@id='modal-image']/div/div/div[2]/div[2]/div[4]/a"));
		Actions action=new Actions(driver);
		action.moveToElement(clk).build().perform();
		action.click().build().perform();
//		alert.accept();
		Thread.sleep(3000);
	}

	@Then("the data must be added to gift voucher theme list followed by sucess message")
	public void the_data_must_be_added_to_gift_voucher_theme_list_followed_by_sucess_message() {
		String msg=driver.findElement(By.xpath("//div[@class='alert alert-success']")).getText();
	    System.out.println(msg);
	}

}
