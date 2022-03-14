package testrunner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)

@CucumberOptions(
		features="src/test/java/features",
		glue= {"stepdefinition","hooks"}
		//,tags={"not @Marketing","not @Gift"}
		,monochrome=true
		,plugin = {"pretty","html:report/cucumber-pretty"}
		//,dryRun=true
		)

public class TestRunner {

}
