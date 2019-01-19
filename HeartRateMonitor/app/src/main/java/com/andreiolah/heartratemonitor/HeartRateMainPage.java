package com.andreiolah.heartratemonitor;

import android.content.Context;
import android.content.Intent;
import android.os.Bundle;
import android.os.PowerManager;
import android.support.v7.app.AppCompatActivity;
import android.view.SurfaceHolder;
import android.view.SurfaceView;
import android.view.View;
import android.widget.TextView;

public class HeartRateMainPage extends AppCompatActivity {

    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.main_start_page);
    }

    public void StartMonitor (View view){
        Intent StartActivitiMonitor = new Intent(this, HeartRateMonitor.class);
        startActivity(StartActivitiMonitor);
    }



}
