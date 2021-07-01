# syntax=docker/dockerfile:experimental
FROM maven:3.8.1-openjdk-17-slim AS MAVEN_BUILD
WORKDIR /build
COPY pom.xml .
COPY src src
RUN mvn clean package

FROM openjdk:11.0.11-jre-slim
ENV PORT=8090\
    JAR_FILE="demo-0.1.jar"
WORKDIR /app
COPY --from=MAVEN_BUILD /build/target/demo-0.1.jar /app/

ENTRYPOINT ["java", "-jar", "demo-0.1.jar", "--server.port=8090"]