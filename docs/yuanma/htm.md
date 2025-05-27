# 书源分组修改器
``` html
<!DOCTYPE html>
<html>
<head>
    <title>JSON书源分组修改工具</title>
    <style>
        body { font-family: Arial, sans-serif; margin: 20px; }
        .container { max-width: 800px; margin: 0 auto; }
        #fileInput { margin-bottom: 10px; }
        #downloadLink { display: none; margin-top: 10px; color: blue; }
        #status { margin-top: 10px; color: #666; }
    </style>
</head>
<body>
    <div class="container">
        <h2>JSON书源处理工具</h2>
        <input type="file" id="fileInput" accept=".json">
        <button onclick="processFile()">处理文件</button>
        <div id="status">未选择文件</div>
        <a id="downloadLink" download>下载修改后的文件</a>
    </div>

    <script>
        function processFile() {
            const fileInput = document.getElementById('fileInput');
            const status = document.getElementById('status');
            const downloadLink = document.getElementById('downloadLink');
            
            if (!fileInput.files[0]) {
                status.textContent = "请先选择JSON文件";
                return;
            }

            const reader = new FileReader();
            reader.onload = function(e) {
                try {
                    const jsonData = JSON.parse(e.target.result);
                    
                    // 修改所有bookSourceGroup字段
                    
                    function modifyData(data) {
                        if (typeof data === 'object' && data !== null) {
                            for (let key in data) {
                                if (key === 'bookSourceGroup') {
                                    data[key] = "书源1";
                                } else if (typeof data[key] === 'object') {
                                    modifyData(data[key]);
                                }
                            }
                        }
                    }

                    
                    modifyData(jsonData);
                    
                    // 创建下载链接
                    const modifiedJson = JSON.stringify(jsonData, null, 2);
                    const blob = new Blob([modifiedJson], { type: 'application/json' });
                    const url = URL.createObjectURL(blob);
                    
                    downloadLink.href = url;
                    downloadLink.download = fileInput.files[0].name.replace('.json', '_modified.json');
                    downloadLink.style.display = 'inline';
                    status.textContent = "处理完成，点击下方链接下载";
                } catch (error) {
                    status.textContent = "文件解析失败，请确保是有效的JSON文件";
                    console.error(error);
                }
            };
            
            reader.readAsText(fileInput.files[0]);
            status.textContent = "正在处理文件...";
        }
    </script>
</body>
</html>
```
