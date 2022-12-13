package Digitalbooking.accommodations.config;

import io.swagger.v3.oas.annotations.enums.SecuritySchemeType;
import io.swagger.v3.oas.annotations.security.SecurityScheme;
import io.swagger.v3.oas.models.Components;
import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Contact;
import io.swagger.v3.oas.models.info.Info;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
@SecurityScheme(
        name = "bearerAuth",
        description = "Insert JWT Token obtained by user or administrator.",
        type = SecuritySchemeType.HTTP,
        bearerFormat = "JWT",
        scheme = "bearer"
)
public class Swagger implements WebMvcConfigurer {

    @Bean
    public OpenAPI customOpenAPI() {
        return new OpenAPI()
                .components(new Components())
                .info(new Info()
                        .title("Digital Booking API")
                        .description("The following documentation is for the correct operation of Digital Booking API. Base url: " + System.getenv().get("APP_HOST_FRONT"))
                        .contact(new Contact()
                                .name("Digital Booking Team")
                                .email(System.getenv().get("APP_EMAIL_USER"))
                        )
                        .version("1.0.0")
                );
    }
}
