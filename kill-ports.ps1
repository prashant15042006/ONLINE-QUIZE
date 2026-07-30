# PowerShell script to kill processes holding ports 3000 and 4000
Write-Host "Checking and clearing ports 3000 and 4000..." -ForegroundColor Cyan

$ports = @(3000, 4000)

foreach ($port in $ports) {
    $connections = Get-NetTCPConnection -LocalPort $port -ErrorAction SilentlyContinue
    if ($connections) {
        foreach ($conn in $connections) {
            $pid = $conn.OwningProcess
            $processName = (Get-Process -Id $pid -ErrorAction SilentlyContinue).Name
            Write-Host "Killing process '$processName' (PID: $pid) on port $port..." -ForegroundColor Yellow
            Stop-Process -Id $pid -Force -ErrorAction SilentlyContinue
        }
    } else {
        Write-Host "Port $port is already free." -ForegroundColor Green
    }
}

Write-Host "Ports cleared! You can now run 'npm start' successfully." -ForegroundColor Green
