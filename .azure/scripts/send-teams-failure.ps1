# Send Teams notification for failed build
param(
    [string]$WebhookUrl,
    [string]$BuildNumber,
    [string]$CommitMessage,
    [string]$TriggeredBy,
    [string]$BranchName,
    [string]$BuildUrl
)

if ([string]::IsNullOrEmpty($WebhookUrl)) {
    Write-Host "Teams webhook URL not configured, skipping notification"
    exit 0
}

# Escape quotes and ensure proper encoding
$CommitMessage = $CommitMessage -replace '"', '\"'

# Build adaptive card JSON without emojis to avoid encoding issues
$body = @"
{
  "type": "message",
  "attachments": [{
    "contentType": "application/vnd.microsoft.card.adaptive",
    "content": {
      "type": "AdaptiveCard",
      "version": "1.4",
      "body": [
        {
          "type": "TextBlock",
          "text": "Build Failed",
          "size": "Large",
          "weight": "Bolder",
          "color": "Attention"
        },
        {
          "type": "TextBlock",
          "text": "B2B Sport Website - Build #$BuildNumber",
          "wrap": true
        },
        {
          "type": "FactSet",
          "facts": [
            {"title": "Commit:", "value": "$CommitMessage"},
            {"title": "Triggered by:", "value": "$TriggeredBy"},
            {"title": "Branch:", "value": "$BranchName"}
          ]
        },
        {
          "type": "TextBlock",
          "text": "Action Required: Check the pipeline logs for details.",
          "wrap": true,
          "weight": "Bolder",
          "color": "Warning"
        }
      ],
      "actions": [
        {
          "type": "Action.OpenUrl",
          "title": "View Pipeline Logs",
          "url": "$BuildUrl"
        }
      ]
    }
  }]
}
"@

# Convert to UTF-8 bytes for proper encoding
$utf8Body = [System.Text.Encoding]::UTF8.GetBytes($body)

try {
    Invoke-RestMethod -Uri $WebhookUrl -Method Post -Body $utf8Body -ContentType "application/json; charset=utf-8"
    Write-Host "Teams failure notification sent"
} catch {
    Write-Host "Failed to send Teams notification: $_"
    exit 1
}
