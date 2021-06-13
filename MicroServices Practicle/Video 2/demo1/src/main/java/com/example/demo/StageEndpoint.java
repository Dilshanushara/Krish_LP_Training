package com.example.demo;

import org.springframework.boot.actuate.endpoint.annotation.Endpoint;
import org.springframework.boot.actuate.endpoint.annotation.ReadOperation;
import org.springframework.boot.actuate.endpoint.annotation.Selector;
import org.springframework.boot.actuate.endpoint.annotation.WriteOperation;
import org.springframework.stereotype.Component;

import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

@Component
@Endpoint(id = "stage")
public class StageEndpoint {
    Map<String,stage> stages= new ConcurrentHashMap<>();

    @ReadOperation
    public Map<String, stage> getStages() {
        return stages;
    }

    @ReadOperation
    public stage setStages(@Selector String name) {
        return stages.get(name);
    }

    @WriteOperation
    public void setValue(@Selector String name,int stage){
        stages.put(name,new stage(stage));

    }
    static class stage{
        int value;

        public stage(int value) {
            this.value = value;
        }

        public int getValue() {
            return value;
        }

        public void setValue(int value) {
            this.value = value;
        }
    }
}
