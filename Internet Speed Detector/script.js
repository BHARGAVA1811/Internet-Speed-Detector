 function speedTest() {
      const image = new Image();
      const downloadSizeBytes = 1000000; // Approx. 1MB
      const downloadSpeedElement = document.getElementById('downloadSpeed');
      const status = document.getElementById('status');
      const startTime = new Date().getTime();

      downloadSpeedElement.textContent = "--";
      status.textContent = "Running test...";

      const imageUrl = "images/test-image.jpg?t=" + startTime;

      
      image.onload = function () {
        const endTime = new Date().getTime();
        const duration = (endTime - startTime) / 1000; // in seconds
        const bitsLoaded = downloadSizeBytes * 8;
        const speedBps = bitsLoaded / duration;
        const speedMbps = (speedBps / 1024 / 1024).toFixed(2);
        downloadSpeedElement.textContent = speedMbps;
        status.textContent = "Test completed.";
      };

      image.onerror = function () {
        downloadSpeedElement.textContent = "Error";
        status.textContent = "Could not perform the test.";
      };

      image.src = imageUrl;
    }

    // Optional: Run automatically on first load
    window.onload = speedTest;