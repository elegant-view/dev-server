/**
 * @file jasmine
 * @author yibuyisheng(yibuyisheng@163.com)
 */

const jasmineCss = `
body { overflow-y: scroll; }
.jasmine_html-reporter { background-color: #eee; padding: 5px; margin: -8px; font-size: 11px; font-family: Monaco, "Lucida Console", monospace; line-height: 14px; color: #333; }
.jasmine_html-reporter a { text-decoration: none; }
.jasmine_html-reporter a:hover { text-decoration: underline; }
.jasmine_html-reporter p, .jasmine_html-reporter h1, .jasmine_html-reporter h2, .jasmine_html-reporter h3, .jasmine_html-reporter h4, .jasmine_html-reporter h5, .jasmine_html-reporter h6 { margin: 0; line-height: 14px; }
.jasmine_html-reporter .jasmine-banner, .jasmine_html-reporter .jasmine-symbol-summary, .jasmine_html-reporter .jasmine-summary, .jasmine_html-reporter .jasmine-result-message, .jasmine_html-reporter .jasmine-spec .jasmine-description, .jasmine_html-reporter .jasmine-spec-detail .jasmine-description, .jasmine_html-reporter .jasmine-alert .jasmine-bar, .jasmine_html-reporter .jasmine-stack-trace { padding-left: 9px; padding-right: 9px; }
.jasmine_html-reporter .jasmine-banner { position: relative; }
.jasmine_html-reporter .jasmine-banner .jasmine-title { background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAAAZCAMAAACGusnyAAACdlBMVEX/////AP+AgICqVaqAQICZM5mAVYCSSZKAQICOOY6ATYCLRouAQICJO4mSSYCIRIiPQICHPIeOR4CGQ4aMQICGPYaLRoCFQ4WKQICPPYWJRYCOQoSJQICNPoSIRICMQoSHQICHRICKQoOHQICKPoOJO4OJQYOMQICMQ4CIQYKLQICIPoKLQ4CKQICNPoKJQISMQ4KJQoSLQYKJQISLQ4KIQoSKQYKIQICIQISMQoSKQYKLQIOLQoOJQYGLQIOKQIOMQoGKQYOLQYGKQIOLQoGJQYOJQIOKQYGJQIOKQoGKQIGLQIKLQ4KKQoGLQYKJQIGKQYKJQIGKQIKJQoGKQYKLQIGKQYKLQIOJQoKKQoOJQYKKQIOJQoKKQoOKQIOLQoKKQYOLQYKJQIOKQoKKQYKKQoKJQYOKQYKLQIOKQoKLQYOKQYKLQIOJQoGKQYKJQYGJQoGKQYKLQoGLQYGKQoGJQYKKQYGJQIKKQoGJQYKLQIKKQYGLQYKKQYGKQYGKQYKJQYOKQoKJQYOKQYKLQYOLQYOKQYKLQYOKQoKKQYKKQYOKQYOJQYKKQYKLQYKKQIKKQoKKQYKKQYKKQoKJQIKKQYKLQYKKQYKKQIKKQYKKQYKKQYKKQIKKQYKJQYGLQYGKQYKKQYKKQYGKQIKKQYGKQYOJQoKKQYOLQYKKQYOKQoKKQYKKQoKKQYKKQYKJQYKLQYKKQYKKQYKKQYKKQYKKQYKKQYKKQYKKQYKJQYKKQYKKQYKKQYKKQYKKQYKKQYKKQYKKQYKKQYKKQYKKQYKLQYKKQYKKQYKKQYKKQYKKQYKKQYKKQYKKQYKKQYKKQYKKQYKKQYKmIDpEAAAA0XRSTlMAAQIDBAUGBwgJCgsMDQ4PEBESExQVFhcYGRobHB0eHyAiIyQlJycoKissLS4wMTQ1Njc4OTo7PDw+P0BCQ0RISUpLTE1OUFNUVVdYWFlaW15fYGFiY2ZnaGlqa2xtb3BxcnN0dnh5ent8fX5/gIGChIWIioyNjo+QkZOUlZaYmZqbnJ2eoKGio6WmqKmsra6vsLGztre4ubq7vL2+wMHDxMjJysvNzs/Q0dLU1tfY2dvc3t/g4eLj5ebn6Onq6+zt7u/w8vP09fb3+Pn6+/z9/vkVQXAAAAMaSURBVHhe5dXxV1N1GMfxz2ABbDgIAm5VDJOyVDIJLUMaVpBWUZUaGbmqoGpZRSiGiRWp6KoZ5AB0ZY50RImZQIlahKkMYXv/R90dBvET/rJfOr3Ouc8v99zPec59zvf56j+vYKlViSf7250X4Mr3O29Tgq08BdGB4DhcekEJ5YkQKFsgWZdtj9JpV+I8xPjLFqkrsEIqO8PHSpis36jWazcqjEsfJjkvRssVU37SdIOu4XCf5vEJPsnwJpnRNU9JmxhMk8l1gehIrq7hTFjzOD+Vf88629qKMJVNltInFeRexRQyJlNeqd1iGDlSzrIUIyXbyFfm3RYprcQRe7lqtWyGYbfc6dT0R2vmdOOkX3u55C1rP37ftiH+tDby4r/RBT0w8TyEkr+epB9XgPDmSYYWbrhCuFYaIyw3fDQAXTnSkh+ANofiHmWf9l+FY1I90FdQTetstO00o23novzVsJ7uB3/C5TkbjRwZ5JerwV4iRWq9HFbFMaK/d0TYqayRiQPuIxxS3Bu8JWU90/60tKi7vkhaznez0a/TbVOKj5CaOZh6fWG6/Lyv9B/ZLR1gw/S/fpbeVD3MCW1li6SvWDOn65tr99/uvWtBS0XDm4s1t+sOHpG0kpBKx/l77wOSnxLpcx6TXmXLTPQOKYOf9Q1dfr8/SJ2mFdCvl1Yl93DiHUZvXeLJbGSzYu5gVJ2slbSakOR8dxCq5adQ2oFLqsE9Ex3L4qQO0eOPeU5x56bypXp4onSEb5OkICX6lDat55TeoztNKQcJaakrz9KCb95oD69IKq+yKW4XPjknaS52V0TZqE2cTtXjcHSCRmUO88e+85hj3EP74i9p8pylw7lxgMDyyl6OV7ZejnjNMfatu87LxRbH0IS35gt2a4ZjmGpVBdKK3Wr6INk8jWWSGqbA55CKgjBRC6E9w78ydTg3ABS3AFV1QN0Y4Aa2pgEjWnQURj9L0ayK6R2ysEqxHUKzYnLvvyU+i9KM2JHJzE4vyZOyDcOwOsySajeLPc8sNvPJkFlyJd20wpqAzZeAfZ3oWybxd+P/3j+SG3uSBdf2VQAAAABJRU5ErkJggg==') no-repeat; background: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhLS0gQ3JlYXRlZCB3aXRoIElua3NjYXBlIChodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy8pIC0tPgoKPHN2ZwogICB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iCiAgIHhtbG5zOmNjPSJodHRwOi8vY3JlYXRpdmVjb21tb25zLm9yZy9ucyMiCiAgIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyIKICAgeG1sbnM6c3ZnPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogICB4bWxuczppbmtzY2FwZT0iaHR0cDovL3d3dy5pbmtzY2FwZS5vcmcvbmFtZXNwYWNlcy9pbmtzY2FwZSIKICAgdmVyc2lvbj0iMS4xIgogICB3aWR0aD0iNjgxLjk2MjUyIgogICBoZWlnaHQ9IjE4Ny41IgogICBpZD0ic3ZnMiIKICAgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+PG1ldGFkYXRhCiAgICAgaWQ9Im1ldGFkYXRhOCI+PHJkZjpSREY+PGNjOldvcmsKICAgICAgICAgcmRmOmFib3V0PSIiPjxkYzpmb3JtYXQ+aW1hZ2Uvc3ZnK3htbDwvZGM6Zm9ybWF0PjxkYzp0eXBlCiAgICAgICAgICAgcmRmOnJlc291cmNlPSJodHRwOi8vcHVybC5vcmcvZGMvZGNtaXR5cGUvU3RpbGxJbWFnZSIgLz48L2NjOldvcms+PC9yZGY6UkRGPjwvbWV0YWRhdGE+PGRlZnMKICAgICBpZD0iZGVmczYiPjxjbGlwUGF0aAogICAgICAgaWQ9ImNsaXBQYXRoMTgiPjxwYXRoCiAgICAgICAgIGQ9Ik0gMCwxNTAwIDAsMCBsIDU0NTUuNzQsMCAwLDE1MDAgTCAwLDE1MDAgeiIKICAgICAgICAgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIKICAgICAgICAgaWQ9InBhdGgyMCIgLz48L2NsaXBQYXRoPjwvZGVmcz48ZwogICAgIHRyYW5zZm9ybT0ibWF0cml4KDEuMjUsMCwwLC0xLjI1LDAsMTg3LjUpIgogICAgIGlkPSJnMTAiPjxnCiAgICAgICB0cmFuc2Zvcm09InNjYWxlKDAuMSwwLjEpIgogICAgICAgaWQ9ImcxMiI+PGcKICAgICAgICAgaWQ9ImcxNCI+PGcKICAgICAgICAgICBjbGlwLXBhdGg9InVybCgjY2xpcFBhdGgxOCkiCiAgICAgICAgICAgaWQ9ImcxNiI+PHBhdGgKICAgICAgICAgICAgIGQ9Im0gMTU0NCw1OTkuNDM0IGMgMC45MiwtNDAuMzUyIDI1LjY4LC04MS42MDIgNzEuNTMsLTgxLjYwMiAyNy41MSwwIDQ3LjY4LDEyLjgzMiA2MS40NCwzNS43NTQgMTIuODMsMjIuOTMgMTIuODMsNTYuODUyIDEyLjgzLDgyLjUyNyBsIDAsMzI5LjE4NCAtNzEuNTIsMCAwLDEwNC41NDMgMjY2LjgzLDAgMCwtMTA0LjU0MyAtNzAuNiwwIDAsLTM0NC43NyBjIDAsLTU4LjY5MSAtMy42OCwtMTA0LjUzMSAtNDQuOTMsLTE1Mi4yMTggLTM2LjY4LC00Mi4xOCAtOTYuMjgsLTY2LjAyIC0xNTMuMTQsLTY2LjAyIC0xMTcuMzcsMCAtMjA3LjI0LDc3Ljk0MSAtMjAyLjY0LDE5Ny4xNDUgbCAxMzAuMiwwIgogICAgICAgICAgICAgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIKICAgICAgICAgICAgIGlkPSJwYXRoMjIiCiAgICAgICAgICAgICBzdHlsZT0iZmlsbDojOGE0MTgyO2ZpbGwtb3BhY2l0eToxO2ZpbGwtcnVsZTpub256ZXJvO3N0cm9rZTpub25lIiAvPjxwYXRoCiAgICAgICAgICAgICBkPSJtIDIzMDEuNCw2NjIuNjk1IGMgMCw4MC43MDMgLTY2Ljk0LDE0NS44MTMgLTE0Ny42MywxNDUuODEzIC04My40NCwwIC0xNDcuNjMsLTY4Ljc4MSAtMTQ3LjYzLC0xNTEuMzAxIDAsLTc5Ljc4NSA2Ni45NCwtMTQ1LjgwMSAxNDUuOCwtMTQ1LjgwMSA4NC4zNSwwIDE0OS40Niw2Ny44NTIgMTQ5LjQ2LDE1MS4yODkgeiBtIC0xLjgzLC0xODEuNTQ3IGMgLTM1Ljc3LC01NC4wOTcgLTkzLjUzLC03OC44NTkgLTE1Ny43MiwtNzguODU5IC0xNDAuMywwIC0yNTEuMjQsMTE2LjQ0OSAtMjUxLjI0LDI1NC45MTggMCwxNDIuMTI5IDExMy43LDI2MC40MSAyNTYuNzQsMjYwLjQxIDYzLjI3LDAgMTE4LjI5LC0yOS4zMzYgMTUyLjIyLC04Mi41MjMgbCAwLDY5LjY4NyAxNzUuMTQsMCAwLC0xMDQuNTI3IC02MS40NCwwIDAsLTI4MC41OTggNjEuNDQsMCAwLC0xMDQuNTI3IC0xNzUuMTQsMCAwLDY2LjAxOSIKICAgICAgICAgICAgIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiCiAgICAgICAgICAgICBpZD0icGF0aDI0IgogICAgICAgICAgICAgc3R5bGU9ImZpbGw6IzhhNDE4MjtmaWxsLW9wYWNpdHk6MTtmaWxsLXJ1bGU6bm9uemVybztzdHJva2U6bm9uZSIgLz48cGF0aAogICAgICAgICAgICAgZD0ibSAyNjIyLjMzLDU1Ny4yNTggYyAzLjY3LC00NC4wMTYgMzMuMDEsLTczLjM0OCA3OC44NiwtNzMuMzQ4IDMzLjkzLDAgNjYuOTMsMjMuODI0IDY2LjkzLDYwLjUwNCAwLDQ4LjYwNiAtNDUuODQsNTYuODU2IC04My40NCw2Ni45NDEgLTg1LjI4LDIyLjAwNCAtMTc4LjgxLDQ4LjYwNiAtMTc4LjgxLDE1NS44NzkgMCw5My41MzYgNzguODYsMTQ3LjYzMyAxNjUuOTgsMTQ3LjYzMyA0NCwwIDgzLjQzLC05LjE3NiAxMTAuOTQsLTQ0LjAwOCBsIDAsMzMuOTIyIDgyLjUzLDAgMCwtMTMyLjk2NSAtMTA4LjIxLDAgYyAtMS44MywzNC44NTYgLTI4LjQyLDU3Ljc3NCAtNjMuMjYsNTcuNzc0IC0zMC4yNiwwIC02Mi4zNSwtMTcuNDIyIC02Mi4zNSwtNTEuMzQ4IDAsLTQ1Ljg0NyA0NC45MywtNTUuOTMgODAuNjksLTY0LjE4IDg4LjAyLC0yMC4xNzUgMTgyLjQ3LC00Ny42OTUgMTgyLjQ3LC0xNTcuNzM0IDAsLTk5LjAyNyAtODMuNDQsLTE1NC4wMzkgLTE3NS4xMywtMTU0LjAzOSAtNDkuNTMsMCAtOTQuNDYsMTUuNTgyIC0xMjYuNTUsNTMuMTggbCAwLC00MC4zNCAtODUuMjcsMCAwLDE0Mi4xMjkgMTE0LjYyLDAiCiAgICAgICAgICAgICBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIgogICAgICAgICAgICAgaWQ9InBhdGgyNiIKICAgICAgICAgICAgIHN0eWxlPSJmaWxsOiM4YTQxODI7ZmlsbC1vcGFjaXR5OjE7ZmlsbC1ydWxlOm5vbnplcm87c3Ryb2tlOm5vbmUiIC8+PHBhdGgKICAgICAgICAgICAgIGQ9Im0gMjk4OC4xOCw4MDAuMjU0IC02My4yNiwwIDAsMTA0LjUyNyAxNjUuMDUsMCAwLC03My4zNTUgYyAzMS4xOCw1MS4zNDcgNzguODYsODUuMjc3IDE0MS4yMSw4NS4yNzcgNjcuODUsMCAxMjQuNzEsLTQxLjI1OCAxNTIuMjEsLTEwMi42OTkgMjYuNiw2Mi4zNTEgOTIuNjIsMTAyLjY5OSAxNjAuNDcsMTAyLjY5OSA1My4xOSwwIDEwNS40NiwtMjIgMTQxLjIxLC02Mi4zNTEgMzguNTIsLTQ0LjkzOCAzOC41MiwtOTMuNTMyIDM4LjUyLC0xNDkuNDU3IGwgMCwtMTg1LjIzOSA2My4yNywwIDAsLTEwNC41MjcgLTIzOC40MiwwIDAsMTA0LjUyNyA2My4yOCwwIDAsMTU3LjcxNSBjIDAsMzIuMTAyIDAsNjAuNTI3IC0xNC42Nyw4OC45NTcgLTE4LjM0LDI2LjU4MiAtNDguNjEsNDAuMzQ0IC03OS43Nyw0MC4zNDQgLTMwLjI2LDAgLTYzLjI4LC0xMi44NDQgLTgyLjUzLC0zNi42NzIgLTIyLjkzLC0yOS4zNTUgLTIyLjkzLC01Ni44NjMgLTIyLjkzLC05Mi42MjkgbCAwLC0xNTcuNzE1IDYzLjI3LDAgMCwtMTA0LjUyNyAtMjM4LjQxLDAgMCwxMDQuNTI3IDYzLjI4LDAgMCwxNTAuMzgzIGMgMCwyOS4zNDggMCw2Ni4wMjMgLTE0LjY3LDkxLjY5OSAtMTUuNTksMjkuMzM2IC00Ny42OSw0NC45MzQgLTgwLjcsNDQuOTM0IC0zMS4xOCwwIC01Ny43NywtMTEuMDA4IC03Ny45NCwtMzUuNzc0IC0yNC43NywtMzAuMjUzIC0yNi42LC02Mi4zNDMgLTI2LjYsLTk5Ljk0MSBsIDAsLTE1MS4zMDEgNjMuMjcsMCAwLC0xMDQuNTI3IC0yMzguNCwwIDAsMTA0LjUyNyA2My4yNiwwIDAsMjgwLjU5OCIKICAgICAgICAgICAgIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiCiAgICAgICAgICAgICBpZD0icGF0aDI4IgogICAgICAgICAgICAgc3R5bGU9ImZpbGw6IzhhNDE4MjtmaWxsLW9wYWNpdHk6MTtmaWxsLXJ1bGU6bm9uemVybztzdHJva2U6bm9uZSIgLz48cGF0aAogICAgICAgICAgICAgZD0ibSAzOTk4LjY2LDk1MS41NDcgLTExMS44NywwIDAsMTE4LjI5MyAxMTEuODcsMCAwLC0xMTguMjkzIHogbSAwLC00MzEuODkxIDYzLjI3LDAgMCwtMTA0LjUyNyAtMjM5LjMzLDAgMCwxMDQuNTI3IDY0LjE5LDAgMCwyODAuNTk4IC02My4yNywwIDAsMTA0LjUyNyAxNzUuMTQsMCAwLC0zODUuMTI1IgogICAgICAgICAgICAgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIKICAgICAgICAgICAgIGlkPSJwYXRoMzAiCiAgICAgICAgICAgICBzdHlsZT0iZmlsbDojOGE0MTgyO2ZpbGwtb3BhY2l0eToxO2ZpbGwtcnVsZTpub256ZXJvO3N0cm9rZTpub25lIiAvPjxwYXRoCiAgICAgICAgICAgICBkPSJtIDQxNTkuMTIsODAwLjI1NCAtNjMuMjcsMCAwLDEwNC41MjcgMTc1LjE0LDAgMCwtNjkuNjg3IGMgMjkuMzUsNTQuMTAxIDg0LjM2LDgwLjY5OSAxNDQuODcsODAuNjk5IDUzLjE5LDAgMTA1LjQ1LC0yMi4wMTYgMTQxLjIyLC02MC41MjcgNDAuMzQsLTQ0LjkzNCA0MS4yNiwtODguMDMyIDQxLjI2LC0xNDMuOTU3IGwgMCwtMTkxLjY1MyA2My4yNywwIDAsLTEwNC41MjcgLTIzOC40LDAgMCwxMDQuNTI3IDYzLjI2LDAgMCwxNTguNjM3IGMgMCwzMC4yNjIgMCw2MS40MzQgLTE5LjI2LDg4LjAzNSAtMjAuMTcsMjYuNTgyIC01My4xOCwzOS40MTQgLTg2LjE5LDM5LjQxNCAtMzMuOTMsMCAtNjguNzcsLTEzLjc1IC04OC45NCwtNDEuMjUgLTIxLjA5LC0yNy41IC0yMS4wOSwtNjkuNjg3IC0yMS4wOSwtMTAyLjcwNyBsIDAsLTE0Mi4xMjkgNjMuMjYsMCAwLC0xMDQuNTI3IC0yMzguNCwwIDAsMTA0LjUyNyA2My4yNywwIDAsMjgwLjU5OCIKICAgICAgICAgICAgIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiCiAgICAgICAgICAgICBpZD0icGF0aDMyIgogICAgICAgICAgICAgc3R5bGU9ImZpbGw6IzhhNDE4MjtmaWxsLW9wYWNpdHk6MTtmaWxsLXJ1bGU6bm9uemVybztzdHJva2U6bm9uZSIgLz48cGF0aAogICAgICAgICAgICAgZD0ibSA1MDgyLjQ4LDcwMy45NjUgYyAtMTkuMjQsNzAuNjA1IC04MS42LDExNS41NDcgLTE1NC4wNCwxMTUuNTQ3IC02Ni4wNCwwIC0xMjkuMywtNTEuMzQ4IC0xNDMuMDUsLTExNS41NDcgbCAyOTcuMDksMCB6IG0gODUuMjcsLTE0NC44ODMgYyAtMzguNTEsLTkzLjUyMyAtMTI5LjI3LC0xNTYuNzkzIC0yMzEuMDUsLTE1Ni43OTMgLTE0My4wNywwIC0yNTcuNjgsMTExLjg3MSAtMjU3LjY4LDI1NS44MzYgMCwxNDQuODgzIDEwOS4xMiwyNjEuMzI4IDI1NC45MSwyNjEuMzI4IDY3Ljg3LDAgMTM1LjcyLC0zMC4yNTggMTgzLjM5LC03OC44NjMgNDguNjIsLTUxLjM0NCA2OC43OSwtMTEzLjY5NSA2OC43OSwtMTgzLjM4MyBsIC0zLjY3LC0zOS40MzQgLTM5Ni4xMywwIGMgMTQuNjcsLTY3Ljg2MyA3Ny4wMywtMTE3LjM2MyAxNDYuNzIsLTExNy4zNjMgNDguNTksMCA5MC43NiwxOC4zMjggMTE4LjI4LDU4LjY3MiBsIDExNi40NCwwIgogICAgICAgICAgICAgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIKICAgICAgICAgICAgIGlkPSJwYXRoMzQiCiAgICAgICAgICAgICBzdHlsZT0iZmlsbDojOGE0MTgyO2ZpbGwtb3BhY2l0eToxO2ZpbGwtcnVsZTpub256ZXJvO3N0cm9rZTpub25lIiAvPjxwYXRoCiAgICAgICAgICAgICBkPSJtIDY5MC44OTUsODUwLjcwMyA5MC43NSwwIDIyLjU0MywzMS4wMzUgMCwyNDMuMTIyIC0xMzUuODI5LDAgMCwtMjQzLjE0MSAyMi41MzYsLTMxLjAxNiIKICAgICAgICAgICAgIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiCiAgICAgICAgICAgICBpZD0icGF0aDM2IgogICAgICAgICAgICAgc3R5bGU9ImZpbGw6IzhhNDE4MjtmaWxsLW9wYWNpdHk6MTtmaWxsLXJ1bGU6bm9uemVybztzdHJva2U6bm9uZSIgLz48cGF0aAogICAgICAgICAgICAgZD0ibSA2MzIuMzk1LDc0Mi4yNTggMjguMDM5LDg2LjMwNCAtMjIuNTUxLDMxLjA0IC0yMzEuMjIzLDc1LjEyOCAtNDEuOTc2LC0xMjkuMTgzIDIzMS4yNTcsLTc1LjEzNyAzNi40NTQsMTEuODQ4IgogICAgICAgICAgICAgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIKICAgICAgICAgICAgIGlkPSJwYXRoMzgiCiAgICAgICAgICAgICBzdHlsZT0iZmlsbDojOGE0MTgyO2ZpbGwtb3BhY2l0eToxO2ZpbGwtcnVsZTpub256ZXJvO3N0cm9rZTpub25lIiAvPjxwYXRoCiAgICAgICAgICAgICBkPSJtIDcxNy40NDksNjUzLjEwNSAtNzMuNDEsNTMuMzYgLTM2LjQ4OCwtMTEuODc1IC0xNDIuOTAzLC0xOTYuNjkyIDEwOS44ODMsLTc5LjgyOCAxNDIuOTE4LDE5Ni43MDMgMCwzOC4zMzIiCiAgICAgICAgICAgICBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIgogICAgICAgICAgICAgaWQ9InBhdGg0MCIKICAgICAgICAgICAgIHN0eWxlPSJmaWxsOiM4YTQxODI7ZmlsbC1vcGFjaXR5OjE7ZmlsbC1ydWxlOm5vbnplcm87c3Ryb2tlOm5vbmUiIC8+PHBhdGgKICAgICAgICAgICAgIGQ9Im0gODI4LjUyLDcwNi40NjUgLTczLjQyNiwtNTMuMzQgMC4wMTEsLTM4LjM1OSBMIDg5OC4wMDQsNDE4LjA3IDEwMDcuOSw0OTcuODk4IDg2NC45NzMsNjk0LjYwOSA4MjguNTIsNzA2LjQ2NSIKICAgICAgICAgICAgIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiCiAgICAgICAgICAgICBpZD0icGF0aDQyIgogICAgICAgICAgICAgc3R5bGU9ImZpbGw6IzhhNDE4MjtmaWxsLW9wYWNpdHk6MTtmaWxsLXJ1bGU6bm9uemVybztzdHJva2U6bm9uZSIgLz48cGF0aAogICAgICAgICAgICAgZD0ibSA4MTIuMDg2LDgyOC41ODYgMjguMDU1LC04Ni4zMiAzNi40ODQsLTExLjgzNiAyMzEuMjI1LDc1LjExNyAtNDEuOTcsMTI5LjE4MyAtMjMxLjIzOSwtNzUuMTQgLTIyLjU1NSwtMzEuMDA0IgogICAgICAgICAgICAgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIKICAgICAgICAgICAgIGlkPSJwYXRoNDQiCiAgICAgICAgICAgICBzdHlsZT0iZmlsbDojOGE0MTgyO2ZpbGwtb3BhY2l0eToxO2ZpbGwtcnVsZTpub256ZXJvO3N0cm9rZTpub25lIiAvPjxwYXRoCiAgICAgICAgICAgICBkPSJtIDczNi4zMDEsMTMzNS44OCBjIC0zMjMuMDQ3LDAgLTU4NS44NzUsLTI2Mi43OCAtNTg1Ljg3NSwtNTg1Ljc4MiAwLC0zMjMuMTE4IDI2Mi44MjgsLTU4NS45NzcgNTg1Ljg3NSwtNTg1Ljk3NyAzMjMuMDE5LDAgNTg1LjgwOSwyNjIuODU5IDU4NS44MDksNTg1Ljk3NyAwLDMyMy4wMDIgLTI2Mi43OSw1ODUuNzgyIC01ODUuODA5LDU4NS43ODIgbCAwLDAgeiBtIDAsLTExOC42MSBjIDI1Ny45NzIsMCA0NjcuMTg5LC0yMDkuMTMgNDY3LjE4OSwtNDY3LjE3MiAwLC0yNTguMTI5IC0yMDkuMjE3LC00NjcuMzQ4IC00NjcuMTg5LC00NjcuMzQ4IC0yNTguMDc0LDAgLTQ2Ny4yNTQsMjA5LjIxOSAtNDY3LjI1NCw0NjcuMzQ4IDAsMjU4LjA0MiAyMDkuMTgsNDY3LjE3MiA0NjcuMjU0LDQ2Ny4xNzIiCiAgICAgICAgICAgICBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIgogICAgICAgICAgICAgaWQ9InBhdGg0NiIKICAgICAgICAgICAgIHN0eWxlPSJmaWxsOiM4YTQxODI7ZmlsbC1vcGFjaXR5OjE7ZmlsbC1ydWxlOm5vbnplcm87c3Ryb2tlOm5vbmUiIC8+PHBhdGgKICAgICAgICAgICAgIGQ9Im0gMTA5MS4xMyw2MTkuODgzIC0xNzUuNzcxLDU3LjEyMSAxMS42MjksMzUuODA4IDE3NS43NjIsLTU3LjEyMSAtMTEuNjIsLTM1LjgwOCIKICAgICAgICAgICAgIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiCiAgICAgICAgICAgICBpZD0icGF0aDQ4IgogICAgICAgICAgICAgc3R5bGU9ImZpbGw6IzhhNDE4MjtmaWxsLW9wYWNpdHk6MTtmaWxsLXJ1bGU6bm9uemVybztzdHJva2U6bm9uZSIgLz48cGF0aAogICAgICAgICAgICAgZD0iTSA4NjYuOTU3LDkwMi4wNzQgODM2LjUsOTI0LjE5OSA5NDUuMTIxLDEwNzMuNzMgOTc1LjU4NiwxMDUxLjYxIDg2Ni45NTcsOTAyLjA3NCIKICAgICAgICAgICAgIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiCiAgICAgICAgICAgICBpZD0icGF0aDUwIgogICAgICAgICAgICAgc3R5bGU9ImZpbGw6IzhhNDE4MjtmaWxsLW9wYWNpdHk6MTtmaWxsLXJ1bGU6bm9uemVybztzdHJva2U6bm9uZSIgLz48cGF0aAogICAgICAgICAgICAgZD0iTSA2MDcuNDY1LDkwMy40NDUgNDk4Ljg1NSwxMDUyLjk3IDUyOS4zMiwxMDc1LjEgNjM3LjkzLDkyNS41NjYgNjA3LjQ2NSw5MDMuNDQ1IgogICAgICAgICAgICAgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIKICAgICAgICAgICAgIGlkPSJwYXRoNTIiCiAgICAgICAgICAgICBzdHlsZT0iZmlsbDojOGE0MTgyO2ZpbGwtb3BhY2l0eToxO2ZpbGwtcnVsZTpub256ZXJvO3N0cm9rZTpub25lIiAvPjxwYXRoCiAgICAgICAgICAgICBkPSJtIDM4MC42ODgsNjIyLjEyOSAtMTEuNjI2LDM1LjgwMSAxNzUuNzU4LDU3LjA5IDExLjYyMSwtMzUuODAxIC0xNzUuNzUzLC01Ny4wOSIKICAgICAgICAgICAgIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiCiAgICAgICAgICAgICBpZD0icGF0aDU0IgogICAgICAgICAgICAgc3R5bGU9ImZpbGw6IzhhNDE4MjtmaWxsLW9wYWNpdHk6MTtmaWxsLXJ1bGU6bm9uemVybztzdHJva2U6bm9uZSIgLz48cGF0aAogICAgICAgICAgICAgZD0ibSA3MTYuMjg5LDM3Ni41OSAzNy42NDA2LDAgMCwxODQuODE2IC0zNy42NDA2LDAgMCwtMTg0LjgxNiB6IgogICAgICAgICAgICAgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIKICAgICAgICAgICAgIGlkPSJwYXRoNTYiCiAgICAgICAgICAgICBzdHlsZT0iZmlsbDojOGE0MTgyO2ZpbGwtb3BhY2l0eToxO2ZpbGwtcnVsZTpub256ZXJvO3N0cm9rZTpub25lIiAvPjwvZz48L2c+PC9nPjwvZz48L3N2Zz4=') no-repeat, none; -moz-background-size: 100%; -o-background-size: 100%; -webkit-background-size: 100%; background-size: 100%; display: block; float: left; width: 90px; height: 25px; }
.jasmine_html-reporter .jasmine-banner .jasmine-version { margin-left: 14px; position: relative; top: 6px; }
.jasmine_html-reporter #jasmine_content { position: fixed; right: 100%; }
.jasmine_html-reporter .jasmine-version { color: #aaa; }
.jasmine_html-reporter .jasmine-banner { margin-top: 14px; }
.jasmine_html-reporter .jasmine-duration { color: #fff; float: right; line-height: 28px; padding-right: 9px; }
.jasmine_html-reporter .jasmine-symbol-summary { overflow: hidden; *zoom: 1; margin: 14px 0; }
.jasmine_html-reporter .jasmine-symbol-summary li { display: inline-block; height: 10px; width: 14px; font-size: 16px; }
.jasmine_html-reporter .jasmine-symbol-summary li.jasmine-passed { font-size: 14px; }
.jasmine_html-reporter .jasmine-symbol-summary li.jasmine-passed:before { color: #007069; content: "\\02022"; }
.jasmine_html-reporter .jasmine-symbol-summary li.jasmine-failed { line-height: 9px; }
.jasmine_html-reporter .jasmine-symbol-summary li.jasmine-failed:before { color: #ca3a11; content: "\\d7"; font-weight: bold; margin-left: -1px; }
.jasmine_html-reporter .jasmine-symbol-summary li.jasmine-disabled { font-size: 14px; }
.jasmine_html-reporter .jasmine-symbol-summary li.jasmine-disabled:before { color: #bababa; content: "\\02022"; }
.jasmine_html-reporter .jasmine-symbol-summary li.jasmine-pending { line-height: 17px; }
.jasmine_html-reporter .jasmine-symbol-summary li.jasmine-pending:before { color: #ba9d37; content: "*"; }
.jasmine_html-reporter .jasmine-symbol-summary li.jasmine-empty { font-size: 14px; }
.jasmine_html-reporter .jasmine-symbol-summary li.jasmine-empty:before { color: #ba9d37; content: "\\02022"; }
.jasmine_html-reporter .jasmine-run-options { float: right; margin-right: 5px; border: 1px solid #8a4182; color: #8a4182; position: relative; line-height: 20px; }
.jasmine_html-reporter .jasmine-run-options .jasmine-trigger { cursor: pointer; padding: 8px 16px; }
.jasmine_html-reporter .jasmine-run-options .jasmine-payload { position: absolute; display: none; right: -1px; border: 1px solid #8a4182; background-color: #eee; white-space: nowrap; padding: 4px 8px; }
.jasmine_html-reporter .jasmine-run-options .jasmine-payload.jasmine-open { display: block; }
.jasmine_html-reporter .jasmine-bar { line-height: 28px; font-size: 14px; display: block; color: #eee; }
.jasmine_html-reporter .jasmine-bar.jasmine-failed { background-color: #ca3a11; }
.jasmine_html-reporter .jasmine-bar.jasmine-passed { background-color: #007069; }
.jasmine_html-reporter .jasmine-bar.jasmine-skipped { background-color: #bababa; }
.jasmine_html-reporter .jasmine-bar.jasmine-errored { background-color: #ca3a11; }
.jasmine_html-reporter .jasmine-bar.jasmine-menu { background-color: #fff; color: #aaa; }
.jasmine_html-reporter .jasmine-bar.jasmine-menu a { color: #333; }
.jasmine_html-reporter .jasmine-bar a { color: white; }
.jasmine_html-reporter.jasmine-spec-list .jasmine-bar.jasmine-menu.jasmine-failure-list, .jasmine_html-reporter.jasmine-spec-list .jasmine-results .jasmine-failures { display: none; }
.jasmine_html-reporter.jasmine-failure-list .jasmine-bar.jasmine-menu.jasmine-spec-list, .jasmine_html-reporter.jasmine-failure-list .jasmine-summary { display: none; }
.jasmine_html-reporter .jasmine-results { margin-top: 14px; }
.jasmine_html-reporter .jasmine-summary { margin-top: 14px; }
.jasmine_html-reporter .jasmine-summary ul { list-style-type: none; margin-left: 14px; padding-top: 0; padding-left: 0; }
.jasmine_html-reporter .jasmine-summary ul.jasmine-suite { margin-top: 7px; margin-bottom: 7px; }
.jasmine_html-reporter .jasmine-summary li.jasmine-passed a { color: #007069; }
.jasmine_html-reporter .jasmine-summary li.jasmine-failed a { color: #ca3a11; }
.jasmine_html-reporter .jasmine-summary li.jasmine-empty a { color: #ba9d37; }
.jasmine_html-reporter .jasmine-summary li.jasmine-pending a { color: #ba9d37; }
.jasmine_html-reporter .jasmine-summary li.jasmine-disabled a { color: #bababa; }
.jasmine_html-reporter .jasmine-description + .jasmine-suite { margin-top: 0; }
.jasmine_html-reporter .jasmine-suite { margin-top: 14px; }
.jasmine_html-reporter .jasmine-suite a { color: #333; }
.jasmine_html-reporter .jasmine-failures .jasmine-spec-detail { margin-bottom: 28px; }
.jasmine_html-reporter .jasmine-failures .jasmine-spec-detail .jasmine-description { background-color: #ca3a11; }
.jasmine_html-reporter .jasmine-failures .jasmine-spec-detail .jasmine-description a { color: white; }
.jasmine_html-reporter .jasmine-result-message { padding-top: 14px; color: #333; white-space: pre; }
.jasmine_html-reporter .jasmine-result-message span.jasmine-result { display: block; }
.jasmine_html-reporter .jasmine-stack-trace { margin: 5px 0 0 0; max-height: 224px; overflow: auto; line-height: 18px; color: #666; border: 1px solid #ddd; background: white; white-space: pre; }
`;

const jasmineJs = `
/*
Copyright (c) 2008-2015 Pivotal Labs

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
var getJasmineRequireObj = (function (jasmineGlobal) {
  var jasmineRequire;

  if (typeof module !== 'undefined' && module.exports) {
    if (typeof global !== 'undefined') {
      jasmineGlobal = global;
    } else {
      jasmineGlobal = {};
    }
    jasmineRequire = exports;
  } else {
    if (typeof window !== 'undefined' && typeof window.toString === 'function' && window.toString() === '[object GjsGlobal]') {
      jasmineGlobal = window;
    }
    jasmineRequire = jasmineGlobal.jasmineRequire = jasmineGlobal.jasmineRequire || {};
  }

  function getJasmineRequire() {
    return jasmineRequire;
  }

  getJasmineRequire().core = function(jRequire) {
    var j$ = {};

    jRequire.base(j$, jasmineGlobal);
    j$.util = jRequire.util();
    j$.errors = jRequire.errors();
    j$.Any = jRequire.Any(j$);
    j$.Anything = jRequire.Anything(j$);
    j$.CallTracker = jRequire.CallTracker();
    j$.MockDate = jRequire.MockDate();
    j$.Clock = jRequire.Clock();
    j$.DelayedFunctionScheduler = jRequire.DelayedFunctionScheduler();
    j$.Env = jRequire.Env(j$);
    j$.ExceptionFormatter = jRequire.ExceptionFormatter();
    j$.Expectation = jRequire.Expectation();
    j$.buildExpectationResult = jRequire.buildExpectationResult();
    j$.JsApiReporter = jRequire.JsApiReporter();
    j$.matchersUtil = jRequire.matchersUtil(j$);
    j$.ObjectContaining = jRequire.ObjectContaining(j$);
    j$.ArrayContaining = jRequire.ArrayContaining(j$);
    j$.pp = jRequire.pp(j$);
    j$.QueueRunner = jRequire.QueueRunner(j$);
    j$.ReportDispatcher = jRequire.ReportDispatcher();
    j$.Spec = jRequire.Spec(j$);
    j$.SpyRegistry = jRequire.SpyRegistry(j$);
    j$.SpyStrategy = jRequire.SpyStrategy();
    j$.StringMatching = jRequire.StringMatching(j$);
    j$.Suite = jRequire.Suite(j$);
    j$.Timer = jRequire.Timer();
    j$.TreeProcessor = jRequire.TreeProcessor();
    j$.version = jRequire.version();
    j$.Order = jRequire.Order();

    j$.matchers = jRequire.requireMatchers(jRequire, j$);

    return j$;
  };

  return getJasmineRequire;
})(this);

getJasmineRequireObj().requireMatchers = function(jRequire, j$) {
  var availableMatchers = [
      'toBe',
      'toBeCloseTo',
      'toBeDefined',
      'toBeFalsy',
      'toBeGreaterThan',
      'toBeLessThan',
      'toBeNaN',
      'toBeNull',
      'toBeTruthy',
      'toBeUndefined',
      'toContain',
      'toEqual',
      'toHaveBeenCalled',
      'toHaveBeenCalledWith',
      'toHaveBeenCalledTimes',
      'toMatch',
      'toThrow',
      'toThrowError'
    ],
    matchers = {};

  for (var i = 0; i < availableMatchers.length; i++) {
    var name = availableMatchers[i];
    matchers[name] = jRequire[name](j$);
  }

  return matchers;
};

getJasmineRequireObj().base = function(j$, jasmineGlobal) {
  j$.unimplementedMethod_ = function() {
    throw new Error('unimplemented method');
  };

  j$.MAX_PRETTY_PRINT_DEPTH = 40;
  j$.MAX_PRETTY_PRINT_ARRAY_LENGTH = 100;
  j$.DEFAULT_TIMEOUT_INTERVAL = 5000;

  j$.getGlobal = function() {
    return jasmineGlobal;
  };

  j$.getEnv = function(options) {
    var env = j$.currentEnv_ = j$.currentEnv_ || new j$.Env(options);
    //jasmine. singletons in here (setTimeout blah blah).
    return env;
  };

  j$.isArray_ = function(value) {
    return j$.isA_('Array', value);
  };

  j$.isString_ = function(value) {
    return j$.isA_('String', value);
  };

  j$.isNumber_ = function(value) {
    return j$.isA_('Number', value);
  };

  j$.isA_ = function(typeName, value) {
    return Object.prototype.toString.apply(value) === '[object ' + typeName + ']';
  };

  j$.isDomNode = function(obj) {
    return obj.nodeType > 0;
  };

  j$.fnNameFor = function(func) {
    return func.name || func.toString().match(/^\s*function\s*(\w*)\s*\(/)[1];
  };

  j$.any = function(clazz) {
    return new j$.Any(clazz);
  };

  j$.anything = function() {
    return new j$.Anything();
  };

  j$.objectContaining = function(sample) {
    return new j$.ObjectContaining(sample);
  };

  j$.stringMatching = function(expected) {
    return new j$.StringMatching(expected);
  };

  j$.arrayContaining = function(sample) {
    return new j$.ArrayContaining(sample);
  };

  j$.createSpy = function(name, originalFn) {

    var spyStrategy = new j$.SpyStrategy({
        name: name,
        fn: originalFn,
        getSpy: function() { return spy; }
      }),
      callTracker = new j$.CallTracker(),
      spy = function() {
        var callData = {
          object: this,
          args: Array.prototype.slice.apply(arguments)
        };

        callTracker.track(callData);
        var returnValue = spyStrategy.exec.apply(this, arguments);
        callData.returnValue = returnValue;

        return returnValue;
      };

    for (var prop in originalFn) {
      if (prop === 'and' || prop === 'calls') {
        throw new Error('Jasmine spies would overwrite the \'and\' and \'calls\' properties on the object being spied upon');
      }

      spy[prop] = originalFn[prop];
    }

    spy.and = spyStrategy;
    spy.calls = callTracker;

    return spy;
  };

  j$.isSpy = function(putativeSpy) {
    if (!putativeSpy) {
      return false;
    }
    return putativeSpy.and instanceof j$.SpyStrategy &&
      putativeSpy.calls instanceof j$.CallTracker;
  };

  j$.createSpyObj = function(baseName, methodNames) {
    if (j$.isArray_(baseName) && j$.util.isUndefined(methodNames)) {
      methodNames = baseName;
      baseName = 'unknown';
    }

    if (!j$.isArray_(methodNames) || methodNames.length === 0) {
      throw 'createSpyObj requires a non-empty array of method names to create spies for';
    }
    var obj = {};
    for (var i = 0; i < methodNames.length; i++) {
      obj[methodNames[i]] = j$.createSpy(baseName + '.' + methodNames[i]);
    }
    return obj;
  };
};

getJasmineRequireObj().util = function() {

  var util = {};

  util.inherit = function(childClass, parentClass) {
    var Subclass = function() {
    };
    Subclass.prototype = parentClass.prototype;
    childClass.prototype = new Subclass();
  };

  util.htmlEscape = function(str) {
    if (!str) {
      return str;
    }
    return str.replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
  };

  util.argsToArray = function(args) {
    var arrayOfArgs = [];
    for (var i = 0; i < args.length; i++) {
      arrayOfArgs.push(args[i]);
    }
    return arrayOfArgs;
  };

  util.isUndefined = function(obj) {
    return obj === void 0;
  };

  util.arrayContains = function(array, search) {
    var i = array.length;
    while (i--) {
      if (array[i] === search) {
        return true;
      }
    }
    return false;
  };

  util.clone = function(obj) {
    if (Object.prototype.toString.apply(obj) === '[object Array]') {
      return obj.slice();
    }

    var cloned = {};
    for (var prop in obj) {
      if (obj.hasOwnProperty(prop)) {
        cloned[prop] = obj[prop];
      }
    }

    return cloned;
  };

  return util;
};

getJasmineRequireObj().Spec = function(j$) {
  function Spec(attrs) {
    this.expectationFactory = attrs.expectationFactory;
    this.resultCallback = attrs.resultCallback || function() {};
    this.id = attrs.id;
    this.description = attrs.description || '';
    this.queueableFn = attrs.queueableFn;
    this.beforeAndAfterFns = attrs.beforeAndAfterFns || function() { return {befores: [], afters: []}; };
    this.userContext = attrs.userContext || function() { return {}; };
    this.onStart = attrs.onStart || function() {};
    this.getSpecName = attrs.getSpecName || function() { return ''; };
    this.expectationResultFactory = attrs.expectationResultFactory || function() { };
    this.queueRunnerFactory = attrs.queueRunnerFactory || function() {};
    this.catchingExceptions = attrs.catchingExceptions || function() { return true; };
    this.throwOnExpectationFailure = !!attrs.throwOnExpectationFailure;

    if (!this.queueableFn.fn) {
      this.pend();
    }

    this.result = {
      id: this.id,
      description: this.description,
      fullName: this.getFullName(),
      failedExpectations: [],
      passedExpectations: [],
      pendingReason: ''
    };
  }

  Spec.prototype.addExpectationResult = function(passed, data, isError) {
    var expectationResult = this.expectationResultFactory(data);
    if (passed) {
      this.result.passedExpectations.push(expectationResult);
    } else {
      this.result.failedExpectations.push(expectationResult);

      if (this.throwOnExpectationFailure && !isError) {
        throw new j$.errors.ExpectationFailed();
      }
    }
  };

  Spec.prototype.expect = function(actual) {
    return this.expectationFactory(actual, this);
  };

  Spec.prototype.execute = function(onComplete, enabled) {
    var self = this;

    this.onStart(this);

    if (!this.isExecutable() || this.markedPending || enabled === false) {
      complete(enabled);
      return;
    }

    var fns = this.beforeAndAfterFns();
    var allFns = fns.befores.concat(this.queueableFn).concat(fns.afters);

    this.queueRunnerFactory({
      queueableFns: allFns,
      onException: function() { self.onException.apply(self, arguments); },
      onComplete: complete,
      userContext: this.userContext()
    });

    function complete(enabledAgain) {
      self.result.status = self.status(enabledAgain);
      self.resultCallback(self.result);

      if (onComplete) {
        onComplete();
      }
    }
  };

  Spec.prototype.onException = function onException(e) {
    if (Spec.isPendingSpecException(e)) {
      this.pend(extractCustomPendingMessage(e));
      return;
    }

    if (e instanceof j$.errors.ExpectationFailed) {
      return;
    }

    this.addExpectationResult(false, {
      matcherName: '',
      passed: false,
      expected: '',
      actual: '',
      error: e
    }, true);
  };

  Spec.prototype.disable = function() {
    this.disabled = true;
  };

  Spec.prototype.pend = function(message) {
    this.markedPending = true;
    if (message) {
      this.result.pendingReason = message;
    }
  };

  Spec.prototype.getResult = function() {
    this.result.status = this.status();
    return this.result;
  };

  Spec.prototype.status = function(enabled) {
    if (this.disabled || enabled === false) {
      return 'disabled';
    }

    if (this.markedPending) {
      return 'pending';
    }

    if (this.result.failedExpectations.length > 0) {
      return 'failed';
    } else {
      return 'passed';
    }
  };

  Spec.prototype.isExecutable = function() {
    return !this.disabled;
  };

  Spec.prototype.getFullName = function() {
    return this.getSpecName(this);
  };

  var extractCustomPendingMessage = function(e) {
    var fullMessage = e.toString(),
        boilerplateStart = fullMessage.indexOf(Spec.pendingSpecExceptionMessage),
        boilerplateEnd = boilerplateStart + Spec.pendingSpecExceptionMessage.length;

    return fullMessage.substr(boilerplateEnd);
  };

  Spec.pendingSpecExceptionMessage = '=> marked Pending';

  Spec.isPendingSpecException = function(e) {
    return !!(e && e.toString && e.toString().indexOf(Spec.pendingSpecExceptionMessage) !== -1);
  };

  return Spec;
};

if (typeof window == void 0 && typeof exports == 'object') {
  exports.Spec = jasmineRequire.Spec;
}

/*jshint bitwise: false*/

getJasmineRequireObj().Order = function() {
  function Order(options) {
    this.random = 'random' in options ? options.random : true;
    var seed = this.seed = options.seed || generateSeed();
    this.sort = this.random ? randomOrder : naturalOrder;

    function naturalOrder(items) {
      return items;
    }

    function randomOrder(items) {
      var copy = items.slice();
      copy.sort(function(a, b) {
        return jenkinsHash(seed + a.id) - jenkinsHash(seed + b.id);
      });
      return copy;
    }

    function generateSeed() {
      return String(Math.random()).slice(-5);
    }

    // Bob Jenkins One-at-a-Time Hash algorithm is a non-cryptographic hash function
    // used to get a different output when the key changes slighly.
    // We use your return to sort the children randomly in a consistent way when
    // used in conjunction with a seed

    function jenkinsHash(key) {
      var hash, i;
      for(hash = i = 0; i < key.length; ++i) {
        hash += key.charCodeAt(i);
        hash += (hash << 10);
        hash ^= (hash >> 6);
      }
      hash += (hash << 3);
      hash ^= (hash >> 11);
      hash += (hash << 15);
      return hash;
    }

  }

  return Order;
};

getJasmineRequireObj().Env = function(j$) {
  function Env(options) {
    options = options || {};

    var self = this;
    var global = options.global || j$.getGlobal();

    var totalSpecsDefined = 0;

    var catchExceptions = true;

    var realSetTimeout = j$.getGlobal().setTimeout;
    var realClearTimeout = j$.getGlobal().clearTimeout;
    this.clock = new j$.Clock(global, function () { return new j$.DelayedFunctionScheduler(); }, new j$.MockDate(global));

    var runnableLookupTable = {};
    var runnableResources = {};

    var currentSpec = null;
    var currentlyExecutingSuites = [];
    var currentDeclarationSuite = null;
    var throwOnExpectationFailure = false;
    var random = false;
    var seed = null;

    var currentSuite = function() {
      return currentlyExecutingSuites[currentlyExecutingSuites.length - 1];
    };

    var currentRunnable = function() {
      return currentSpec || currentSuite();
    };

    var reporter = new j$.ReportDispatcher([
      'jasmineStarted',
      'jasmineDone',
      'suiteStarted',
      'suiteDone',
      'specStarted',
      'specDone'
    ]);

    this.specFilter = function() {
      return true;
    };

    this.addCustomEqualityTester = function(tester) {
      if(!currentRunnable()) {
        throw new Error('Custom Equalities must be added in a before function or a spec');
      }
      runnableResources[currentRunnable().id].customEqualityTesters.push(tester);
    };

    this.addMatchers = function(matchersToAdd) {
      if(!currentRunnable()) {
        throw new Error('Matchers must be added in a before function or a spec');
      }
      var customMatchers = runnableResources[currentRunnable().id].customMatchers;
      for (var matcherName in matchersToAdd) {
        customMatchers[matcherName] = matchersToAdd[matcherName];
      }
    };

    j$.Expectation.addCoreMatchers(j$.matchers);

    var nextSpecId = 0;
    var getNextSpecId = function() {
      return 'spec' + nextSpecId++;
    };

    var nextSuiteId = 0;
    var getNextSuiteId = function() {
      return 'suite' + nextSuiteId++;
    };

    var expectationFactory = function(actual, spec) {
      return j$.Expectation.Factory({
        util: j$.matchersUtil,
        customEqualityTesters: runnableResources[spec.id].customEqualityTesters,
        customMatchers: runnableResources[spec.id].customMatchers,
        actual: actual,
        addExpectationResult: addExpectationResult
      });

      function addExpectationResult(passed, result) {
        return spec.addExpectationResult(passed, result);
      }
    };

    var defaultResourcesForRunnable = function(id, parentRunnableId) {
      var resources = {spies: [], customEqualityTesters: [], customMatchers: {}};

      if(runnableResources[parentRunnableId]){
        resources.customEqualityTesters = j$.util.clone(runnableResources[parentRunnableId].customEqualityTesters);
        resources.customMatchers = j$.util.clone(runnableResources[parentRunnableId].customMatchers);
      }

      runnableResources[id] = resources;
    };

    var clearResourcesForRunnable = function(id) {
        spyRegistry.clearSpies();
        delete runnableResources[id];
    };

    var beforeAndAfterFns = function(suite) {
      return function() {
        var befores = [],
          afters = [];

        while(suite) {
          befores = befores.concat(suite.beforeFns);
          afters = afters.concat(suite.afterFns);

          suite = suite.parentSuite;
        }

        return {
          befores: befores.reverse(),
          afters: afters
        };
      };
    };

    var getSpecName = function(spec, suite) {
      return suite.getFullName() + ' ' + spec.description;
    };

    // TODO: we may just be able to pass in the fn instead of wrapping here
    var buildExpectationResult = j$.buildExpectationResult,
        exceptionFormatter = new j$.ExceptionFormatter(),
        expectationResultFactory = function(attrs) {
          attrs.messageFormatter = exceptionFormatter.message;
          attrs.stackFormatter = exceptionFormatter.stack;

          return buildExpectationResult(attrs);
        };

    // TODO: fix this naming, and here's where the value comes in
    this.catchExceptions = function(value) {
      catchExceptions = !!value;
      return catchExceptions;
    };

    this.catchingExceptions = function() {
      return catchExceptions;
    };

    var maximumSpecCallbackDepth = 20;
    var currentSpecCallbackDepth = 0;

    function clearStack(fn) {
      currentSpecCallbackDepth++;
      if (currentSpecCallbackDepth >= maximumSpecCallbackDepth) {
        currentSpecCallbackDepth = 0;
        realSetTimeout(fn, 0);
      } else {
        fn();
      }
    }

    var catchException = function(e) {
      return j$.Spec.isPendingSpecException(e) || catchExceptions;
    };

    this.throwOnExpectationFailure = function(value) {
      throwOnExpectationFailure = !!value;
    };

    this.throwingExpectationFailures = function() {
      return throwOnExpectationFailure;
    };

    this.randomizeTests = function(value) {
      random = !!value;
    };

    this.randomTests = function() {
      return random;
    };

    this.seed = function(value) {
      if (value) {
        seed = value;
      }
      return seed;
    };

    var queueRunnerFactory = function(options) {
      options.catchException = catchException;
      options.clearStack = options.clearStack || clearStack;
      options.timeout = {setTimeout: realSetTimeout, clearTimeout: realClearTimeout};
      options.fail = self.fail;

      new j$.QueueRunner(options).execute();
    };

    var topSuite = new j$.Suite({
      env: this,
      id: getNextSuiteId(),
      description: 'Jasmine__TopLevel__Suite',
      queueRunner: queueRunnerFactory
    });
    runnableLookupTable[topSuite.id] = topSuite;
    defaultResourcesForRunnable(topSuite.id);
    currentDeclarationSuite = topSuite;

    this.topSuite = function() {
      return topSuite;
    };

    this.execute = function(runnablesToRun) {
      if(!runnablesToRun) {
        if (focusedRunnables.length) {
          runnablesToRun = focusedRunnables;
        } else {
          runnablesToRun = [topSuite.id];
        }
      }

      var order = new j$.Order({
        random: random,
        seed: seed
      });

      var processor = new j$.TreeProcessor({
        tree: topSuite,
        runnableIds: runnablesToRun,
        queueRunnerFactory: queueRunnerFactory,
        nodeStart: function(suite) {
          currentlyExecutingSuites.push(suite);
          defaultResourcesForRunnable(suite.id, suite.parentSuite.id);
          reporter.suiteStarted(suite.result);
        },
        nodeComplete: function(suite, result) {
          if (!suite.disabled) {
            clearResourcesForRunnable(suite.id);
          }
          currentlyExecutingSuites.pop();
          reporter.suiteDone(result);
        },
        orderChildren: function(node) {
          return order.sort(node.children);
        }
      });

      if(!processor.processTree().valid) {
        throw new Error('Invalid order: would cause a beforeAll or afterAll to be run multiple times');
      }

      reporter.jasmineStarted({
        totalSpecsDefined: totalSpecsDefined
      });

      processor.execute(function() {
        reporter.jasmineDone({
          order: order
        });
      });
    };

    this.addReporter = function(reporterToAdd) {
      reporter.addReporter(reporterToAdd);
    };

    var spyRegistry = new j$.SpyRegistry({currentSpies: function() {
      if(!currentRunnable()) {
        throw new Error('Spies must be created in a before function or a spec');
      }
      return runnableResources[currentRunnable().id].spies;
    }});

    this.spyOn = function() {
      return spyRegistry.spyOn.apply(spyRegistry, arguments);
    };

    var suiteFactory = function(description) {
      var suite = new j$.Suite({
        env: self,
        id: getNextSuiteId(),
        description: description,
        parentSuite: currentDeclarationSuite,
        expectationFactory: expectationFactory,
        expectationResultFactory: expectationResultFactory,
        throwOnExpectationFailure: throwOnExpectationFailure
      });

      runnableLookupTable[suite.id] = suite;
      return suite;
    };

    this.describe = function(description, specDefinitions) {
      var suite = suiteFactory(description);
      if (specDefinitions.length > 0) {
        throw new Error('describe does not expect a done parameter');
      }
      if (currentDeclarationSuite.markedPending) {
        suite.pend();
      }
      addSpecsToSuite(suite, specDefinitions);
      return suite;
    };

    this.xdescribe = function(description, specDefinitions) {
      var suite = suiteFactory(description);
      suite.pend();
      addSpecsToSuite(suite, specDefinitions);
      return suite;
    };

    var focusedRunnables = [];

    this.fdescribe = function(description, specDefinitions) {
      var suite = suiteFactory(description);
      suite.isFocused = true;

      focusedRunnables.push(suite.id);
      unfocusAncestor();
      addSpecsToSuite(suite, specDefinitions);

      return suite;
    };

    function addSpecsToSuite(suite, specDefinitions) {
      var parentSuite = currentDeclarationSuite;
      parentSuite.addChild(suite);
      currentDeclarationSuite = suite;

      var declarationError = null;
      try {
        specDefinitions.call(suite);
      } catch (e) {
        declarationError = e;
      }

      if (declarationError) {
        self.it('encountered a declaration exception', function() {
          throw declarationError;
        });
      }

      currentDeclarationSuite = parentSuite;
    }

    function findFocusedAncestor(suite) {
      while (suite) {
        if (suite.isFocused) {
          return suite.id;
        }
        suite = suite.parentSuite;
      }

      return null;
    }

    function unfocusAncestor() {
      var focusedAncestor = findFocusedAncestor(currentDeclarationSuite);
      if (focusedAncestor) {
        for (var i = 0; i < focusedRunnables.length; i++) {
          if (focusedRunnables[i] === focusedAncestor) {
            focusedRunnables.splice(i, 1);
            break;
          }
        }
      }
    }

    var specFactory = function(description, fn, suite, timeout) {
      totalSpecsDefined++;
      var spec = new j$.Spec({
        id: getNextSpecId(),
        beforeAndAfterFns: beforeAndAfterFns(suite),
        expectationFactory: expectationFactory,
        resultCallback: specResultCallback,
        getSpecName: function(spec) {
          return getSpecName(spec, suite);
        },
        onStart: specStarted,
        description: description,
        expectationResultFactory: expectationResultFactory,
        queueRunnerFactory: queueRunnerFactory,
        userContext: function() { return suite.clonedSharedUserContext(); },
        queueableFn: {
          fn: fn,
          timeout: function() { return timeout || j$.DEFAULT_TIMEOUT_INTERVAL; }
        },
        throwOnExpectationFailure: throwOnExpectationFailure
      });

      runnableLookupTable[spec.id] = spec;

      if (!self.specFilter(spec)) {
        spec.disable();
      }

      return spec;

      function specResultCallback(result) {
        clearResourcesForRunnable(spec.id);
        currentSpec = null;
        reporter.specDone(result);
      }

      function specStarted(spec) {
        currentSpec = spec;
        defaultResourcesForRunnable(spec.id, suite.id);
        reporter.specStarted(spec.result);
      }
    };

    this.it = function(description, fn, timeout) {
      var spec = specFactory(description, fn, currentDeclarationSuite, timeout);
      if (currentDeclarationSuite.markedPending) {
        spec.pend();
      }
      currentDeclarationSuite.addChild(spec);
      return spec;
    };

    this.xit = function() {
      var spec = this.it.apply(this, arguments);
      spec.pend('Temporarily disabled with xit');
      return spec;
    };

    this.fit = function(description, fn, timeout){
      var spec = specFactory(description, fn, currentDeclarationSuite, timeout);
      currentDeclarationSuite.addChild(spec);
      focusedRunnables.push(spec.id);
      unfocusAncestor();
      return spec;
    };

    this.expect = function(actual) {
      if (!currentRunnable()) {
        throw new Error('\'expect\' was used when there was no current spec, this could be because an asynchronous test timed out');
      }

      return currentRunnable().expect(actual);
    };

    this.beforeEach = function(beforeEachFunction, timeout) {
      currentDeclarationSuite.beforeEach({
        fn: beforeEachFunction,
        timeout: function() { return timeout || j$.DEFAULT_TIMEOUT_INTERVAL; }
      });
    };

    this.beforeAll = function(beforeAllFunction, timeout) {
      currentDeclarationSuite.beforeAll({
        fn: beforeAllFunction,
        timeout: function() { return timeout || j$.DEFAULT_TIMEOUT_INTERVAL; }
      });
    };

    this.afterEach = function(afterEachFunction, timeout) {
      currentDeclarationSuite.afterEach({
        fn: afterEachFunction,
        timeout: function() { return timeout || j$.DEFAULT_TIMEOUT_INTERVAL; }
      });
    };

    this.afterAll = function(afterAllFunction, timeout) {
      currentDeclarationSuite.afterAll({
        fn: afterAllFunction,
        timeout: function() { return timeout || j$.DEFAULT_TIMEOUT_INTERVAL; }
      });
    };

    this.pending = function(message) {
      var fullMessage = j$.Spec.pendingSpecExceptionMessage;
      if(message) {
        fullMessage += message;
      }
      throw fullMessage;
    };

    this.fail = function(error) {
      var message = 'Failed';
      if (error) {
        message += ': ';
        message += error.message || error;
      }

      currentRunnable().addExpectationResult(false, {
        matcherName: '',
        passed: false,
        expected: '',
        actual: '',
        message: message,
        error: error && error.message ? error : null
      });
    };
  }

  return Env;
};

getJasmineRequireObj().JsApiReporter = function() {

  var noopTimer = {
    start: function(){},
    elapsed: function(){ return 0; }
  };

  function JsApiReporter(options) {
    var timer = options.timer || noopTimer,
        status = 'loaded';

    this.started = false;
    this.finished = false;
    this.runDetails = {};

    this.jasmineStarted = function() {
      this.started = true;
      status = 'started';
      timer.start();
    };

    var executionTime;

    this.jasmineDone = function(runDetails) {
      this.finished = true;
      this.runDetails = runDetails;
      executionTime = timer.elapsed();
      status = 'done';
    };

    this.status = function() {
      return status;
    };

    var suites = [],
      suites_hash = {};

    this.suiteStarted = function(result) {
      suites_hash[result.id] = result;
    };

    this.suiteDone = function(result) {
      storeSuite(result);
    };

    this.suiteResults = function(index, length) {
      return suites.slice(index, index + length);
    };

    function storeSuite(result) {
      suites.push(result);
      suites_hash[result.id] = result;
    }

    this.suites = function() {
      return suites_hash;
    };

    var specs = [];

    this.specDone = function(result) {
      specs.push(result);
    };

    this.specResults = function(index, length) {
      return specs.slice(index, index + length);
    };

    this.specs = function() {
      return specs;
    };

    this.executionTime = function() {
      return executionTime;
    };

  }

  return JsApiReporter;
};

getJasmineRequireObj().CallTracker = function() {

  function CallTracker() {
    var calls = [];

    this.track = function(context) {
      calls.push(context);
    };

    this.any = function() {
      return !!calls.length;
    };

    this.count = function() {
      return calls.length;
    };

    this.argsFor = function(index) {
      var call = calls[index];
      return call ? call.args : [];
    };

    this.all = function() {
      return calls;
    };

    this.allArgs = function() {
      var callArgs = [];
      for(var i = 0; i < calls.length; i++){
        callArgs.push(calls[i].args);
      }

      return callArgs;
    };

    this.first = function() {
      return calls[0];
    };

    this.mostRecent = function() {
      return calls[calls.length - 1];
    };

    this.reset = function() {
      calls = [];
    };
  }

  return CallTracker;
};

getJasmineRequireObj().Clock = function() {
  function Clock(global, delayedFunctionSchedulerFactory, mockDate) {
    var self = this,
      realTimingFunctions = {
        setTimeout: global.setTimeout,
        clearTimeout: global.clearTimeout,
        setInterval: global.setInterval,
        clearInterval: global.clearInterval
      },
      fakeTimingFunctions = {
        setTimeout: setTimeout,
        clearTimeout: clearTimeout,
        setInterval: setInterval,
        clearInterval: clearInterval
      },
      installed = false,
      delayedFunctionScheduler,
      timer;


    self.install = function() {
      if(!originalTimingFunctionsIntact()) {
        throw new Error('Jasmine Clock was unable to install over custom global timer functions. Is the clock already installed?');
      }
      replace(global, fakeTimingFunctions);
      timer = fakeTimingFunctions;
      delayedFunctionScheduler = delayedFunctionSchedulerFactory();
      installed = true;

      return self;
    };

    self.uninstall = function() {
      delayedFunctionScheduler = null;
      mockDate.uninstall();
      replace(global, realTimingFunctions);

      timer = realTimingFunctions;
      installed = false;
    };

    self.withMock = function(closure) {
      this.install();
      try {
        closure();
      } finally {
        this.uninstall();
      }
    };

    self.mockDate = function(initialDate) {
      mockDate.install(initialDate);
    };

    self.setTimeout = function(fn, delay, params) {
      if (legacyIE()) {
        if (arguments.length > 2) {
          throw new Error('IE < 9 cannot support extra params to setTimeout without a polyfill');
        }
        return timer.setTimeout(fn, delay);
      }
      return Function.prototype.apply.apply(timer.setTimeout, [global, arguments]);
    };

    self.setInterval = function(fn, delay, params) {
      if (legacyIE()) {
        if (arguments.length > 2) {
          throw new Error('IE < 9 cannot support extra params to setInterval without a polyfill');
        }
        return timer.setInterval(fn, delay);
      }
      return Function.prototype.apply.apply(timer.setInterval, [global, arguments]);
    };

    self.clearTimeout = function(id) {
      return Function.prototype.call.apply(timer.clearTimeout, [global, id]);
    };

    self.clearInterval = function(id) {
      return Function.prototype.call.apply(timer.clearInterval, [global, id]);
    };

    self.tick = function(millis) {
      if (installed) {
        mockDate.tick(millis);
        delayedFunctionScheduler.tick(millis);
      } else {
        throw new Error('Mock clock is not installed, use jasmine.clock().install()');
      }
    };

    return self;

    function originalTimingFunctionsIntact() {
      return global.setTimeout === realTimingFunctions.setTimeout &&
        global.clearTimeout === realTimingFunctions.clearTimeout &&
        global.setInterval === realTimingFunctions.setInterval &&
        global.clearInterval === realTimingFunctions.clearInterval;
    }

    function legacyIE() {
      //if these methods are polyfilled, apply will be present
      return !(realTimingFunctions.setTimeout || realTimingFunctions.setInterval).apply;
    }

    function replace(dest, source) {
      for (var prop in source) {
        dest[prop] = source[prop];
      }
    }

    function setTimeout(fn, delay) {
      return delayedFunctionScheduler.scheduleFunction(fn, delay, argSlice(arguments, 2));
    }

    function clearTimeout(id) {
      return delayedFunctionScheduler.removeFunctionWithId(id);
    }

    function setInterval(fn, interval) {
      return delayedFunctionScheduler.scheduleFunction(fn, interval, argSlice(arguments, 2), true);
    }

    function clearInterval(id) {
      return delayedFunctionScheduler.removeFunctionWithId(id);
    }

    function argSlice(argsObj, n) {
      return Array.prototype.slice.call(argsObj, n);
    }
  }

  return Clock;
};

getJasmineRequireObj().DelayedFunctionScheduler = function() {
  function DelayedFunctionScheduler() {
    var self = this;
    var scheduledLookup = [];
    var scheduledFunctions = {};
    var currentTime = 0;
    var delayedFnCount = 0;

    self.tick = function(millis) {
      millis = millis || 0;
      var endTime = currentTime + millis;

      runScheduledFunctions(endTime);
      currentTime = endTime;
    };

    self.scheduleFunction = function(funcToCall, millis, params, recurring, timeoutKey, runAtMillis) {
      var f;
      if (typeof(funcToCall) === 'string') {
        /* jshint evil: true */
        f = function() { return eval(funcToCall); };
        /* jshint evil: false */
      } else {
        f = funcToCall;
      }

      millis = millis || 0;
      timeoutKey = timeoutKey || ++delayedFnCount;
      runAtMillis = runAtMillis || (currentTime + millis);

      var funcToSchedule = {
        runAtMillis: runAtMillis,
        funcToCall: f,
        recurring: recurring,
        params: params,
        timeoutKey: timeoutKey,
        millis: millis
      };

      if (runAtMillis in scheduledFunctions) {
        scheduledFunctions[runAtMillis].push(funcToSchedule);
      } else {
        scheduledFunctions[runAtMillis] = [funcToSchedule];
        scheduledLookup.push(runAtMillis);
        scheduledLookup.sort(function (a, b) {
          return a - b;
        });
      }

      return timeoutKey;
    };

    self.removeFunctionWithId = function(timeoutKey) {
      for (var runAtMillis in scheduledFunctions) {
        var funcs = scheduledFunctions[runAtMillis];
        var i = indexOfFirstToPass(funcs, function (func) {
          return func.timeoutKey === timeoutKey;
        });

        if (i > -1) {
          if (funcs.length === 1) {
            delete scheduledFunctions[runAtMillis];
            deleteFromLookup(runAtMillis);
          } else {
            funcs.splice(i, 1);
          }

          // intervals get rescheduled when executed, so there's never more
          // than a single scheduled function with a given timeoutKey
          break;
        }
      }
    };

    return self;

    function indexOfFirstToPass(array, testFn) {
      var index = -1;

      for (var i = 0; i < array.length; ++i) {
        if (testFn(array[i])) {
          index = i;
          break;
        }
      }

      return index;
    }

    function deleteFromLookup(key) {
      var value = Number(key);
      var i = indexOfFirstToPass(scheduledLookup, function (millis) {
        return millis === value;
      });

      if (i > -1) {
        scheduledLookup.splice(i, 1);
      }
    }

    function reschedule(scheduledFn) {
      self.scheduleFunction(scheduledFn.funcToCall,
        scheduledFn.millis,
        scheduledFn.params,
        true,
        scheduledFn.timeoutKey,
        scheduledFn.runAtMillis + scheduledFn.millis);
    }

    function forEachFunction(funcsToRun, callback) {
      for (var i = 0; i < funcsToRun.length; ++i) {
        callback(funcsToRun[i]);
      }
    }

    function runScheduledFunctions(endTime) {
      if (scheduledLookup.length === 0 || scheduledLookup[0] > endTime) {
        return;
      }

      do {
        currentTime = scheduledLookup.shift();

        var funcsToRun = scheduledFunctions[currentTime];
        delete scheduledFunctions[currentTime];

        forEachFunction(funcsToRun, function(funcToRun) {
          if (funcToRun.recurring) {
            reschedule(funcToRun);
          }
        });

        forEachFunction(funcsToRun, function(funcToRun) {
          funcToRun.funcToCall.apply(null, funcToRun.params || []);
        });
      } while (scheduledLookup.length > 0 &&
              // checking first if we're out of time prevents setTimeout(0)
              // scheduled in a funcToRun from forcing an extra iteration
                 currentTime !== endTime  &&
                 scheduledLookup[0] <= endTime);
    }
  }

  return DelayedFunctionScheduler;
};

getJasmineRequireObj().ExceptionFormatter = function() {
  function ExceptionFormatter() {
    this.message = function(error) {
      var message = '';

      if (error.name && error.message) {
        message += error.name + ': ' + error.message;
      } else {
        message += error.toString() + ' thrown';
      }

      if (error.fileName || error.sourceURL) {
        message += ' in ' + (error.fileName || error.sourceURL);
      }

      if (error.line || error.lineNumber) {
        message += ' (line ' + (error.line || error.lineNumber) + ')';
      }

      return message;
    };

    this.stack = function(error) {
      return error ? error.stack : null;
    };
  }

  return ExceptionFormatter;
};

getJasmineRequireObj().Expectation = function() {

  function Expectation(options) {
    this.util = options.util || { buildFailureMessage: function() {} };
    this.customEqualityTesters = options.customEqualityTesters || [];
    this.actual = options.actual;
    this.addExpectationResult = options.addExpectationResult || function(){};
    this.isNot = options.isNot;

    var customMatchers = options.customMatchers || {};
    for (var matcherName in customMatchers) {
      this[matcherName] = Expectation.prototype.wrapCompare(matcherName, customMatchers[matcherName]);
    }
  }

  Expectation.prototype.wrapCompare = function(name, matcherFactory) {
    return function() {
      var args = Array.prototype.slice.call(arguments, 0),
        expected = args.slice(0),
        message = '';

      args.unshift(this.actual);

      var matcher = matcherFactory(this.util, this.customEqualityTesters),
          matcherCompare = matcher.compare;

      function defaultNegativeCompare() {
        var result = matcher.compare.apply(null, args);
        result.pass = !result.pass;
        return result;
      }

      if (this.isNot) {
        matcherCompare = matcher.negativeCompare || defaultNegativeCompare;
      }

      var result = matcherCompare.apply(null, args);

      if (!result.pass) {
        if (!result.message) {
          args.unshift(this.isNot);
          args.unshift(name);
          message = this.util.buildFailureMessage.apply(null, args);
        } else {
          if (Object.prototype.toString.apply(result.message) === '[object Function]') {
            message = result.message();
          } else {
            message = result.message;
          }
        }
      }

      if (expected.length == 1) {
        expected = expected[0];
      }

      // TODO: how many of these params are needed?
      this.addExpectationResult(
        result.pass,
        {
          matcherName: name,
          passed: result.pass,
          message: message,
          actual: this.actual,
          expected: expected // TODO: this may need to be arrayified/sliced
        }
      );
    };
  };

  Expectation.addCoreMatchers = function(matchers) {
    var prototype = Expectation.prototype;
    for (var matcherName in matchers) {
      var matcher = matchers[matcherName];
      prototype[matcherName] = prototype.wrapCompare(matcherName, matcher);
    }
  };

  Expectation.Factory = function(options) {
    options = options || {};

    var expect = new Expectation(options);

    // TODO: this would be nice as its own Object - NegativeExpectation
    // TODO: copy instead of mutate options
    options.isNot = true;
    expect.not = new Expectation(options);

    return expect;
  };

  return Expectation;
};

//TODO: expectation result may make more sense as a presentation of an expectation.
getJasmineRequireObj().buildExpectationResult = function() {
  function buildExpectationResult(options) {
    var messageFormatter = options.messageFormatter || function() {},
      stackFormatter = options.stackFormatter || function() {};

    var result = {
      matcherName: options.matcherName,
      message: message(),
      stack: stack(),
      passed: options.passed
    };

    if(!result.passed) {
      result.expected = options.expected;
      result.actual = options.actual;
    }

    return result;

    function message() {
      if (options.passed) {
        return 'Passed.';
      } else if (options.message) {
        return options.message;
      } else if (options.error) {
        return messageFormatter(options.error);
      }
      return '';
    }

    function stack() {
      if (options.passed) {
        return '';
      }

      var error = options.error;
      if (!error) {
        try {
          throw new Error(message());
        } catch (e) {
          error = e;
        }
      }
      return stackFormatter(error);
    }
  }

  return buildExpectationResult;
};

getJasmineRequireObj().MockDate = function() {
  function MockDate(global) {
    var self = this;
    var currentTime = 0;

    if (!global || !global.Date) {
      self.install = function() {};
      self.tick = function() {};
      self.uninstall = function() {};
      return self;
    }

    var GlobalDate = global.Date;

    self.install = function(mockDate) {
      if (mockDate instanceof GlobalDate) {
        currentTime = mockDate.getTime();
      } else {
        currentTime = new GlobalDate().getTime();
      }

      global.Date = FakeDate;
    };

    self.tick = function(millis) {
      millis = millis || 0;
      currentTime = currentTime + millis;
    };

    self.uninstall = function() {
      currentTime = 0;
      global.Date = GlobalDate;
    };

    createDateProperties();

    return self;

    function FakeDate() {
      switch(arguments.length) {
        case 0:
          return new GlobalDate(currentTime);
        case 1:
          return new GlobalDate(arguments[0]);
        case 2:
          return new GlobalDate(arguments[0], arguments[1]);
        case 3:
          return new GlobalDate(arguments[0], arguments[1], arguments[2]);
        case 4:
          return new GlobalDate(arguments[0], arguments[1], arguments[2], arguments[3]);
        case 5:
          return new GlobalDate(arguments[0], arguments[1], arguments[2], arguments[3],
                                arguments[4]);
        case 6:
          return new GlobalDate(arguments[0], arguments[1], arguments[2], arguments[3],
                                arguments[4], arguments[5]);
        default:
          return new GlobalDate(arguments[0], arguments[1], arguments[2], arguments[3],
                                arguments[4], arguments[5], arguments[6]);
      }
    }

    function createDateProperties() {
      FakeDate.prototype = GlobalDate.prototype;

      FakeDate.now = function() {
        if (GlobalDate.now) {
          return currentTime;
        } else {
          throw new Error('Browser does not support Date.now()');
        }
      };

      FakeDate.toSource = GlobalDate.toSource;
      FakeDate.toString = GlobalDate.toString;
      FakeDate.parse = GlobalDate.parse;
      FakeDate.UTC = GlobalDate.UTC;
    }
	}

  return MockDate;
};

getJasmineRequireObj().pp = function(j$) {

  function PrettyPrinter() {
    this.ppNestLevel_ = 0;
    this.seen = [];
  }

  PrettyPrinter.prototype.format = function(value) {
    this.ppNestLevel_++;
    try {
      if (j$.util.isUndefined(value)) {
        this.emitScalar('undefined');
      } else if (value === null) {
        this.emitScalar('null');
      } else if (value === 0 && 1/value === -Infinity) {
        this.emitScalar('-0');
      } else if (value === j$.getGlobal()) {
        this.emitScalar('<global>');
      } else if (value.jasmineToString) {
        this.emitScalar(value.jasmineToString());
      } else if (typeof value === 'string') {
        this.emitString(value);
      } else if (j$.isSpy(value)) {
        this.emitScalar('spy on ' + value.and.identity());
      } else if (value instanceof RegExp) {
        this.emitScalar(value.toString());
      } else if (typeof value === 'function') {
        this.emitScalar('Function');
      } else if (typeof value.nodeType === 'number') {
        this.emitScalar('HTMLNode');
      } else if (value instanceof Date) {
        this.emitScalar('Date(' + value + ')');
      } else if (value.toString && typeof value === 'object' && !(value instanceof Array) && value.toString !== Object.prototype.toString) {
        this.emitScalar(value.toString());
      } else if (j$.util.arrayContains(this.seen, value)) {
        this.emitScalar('<circular reference: ' + (j$.isArray_(value) ? 'Array' : 'Object') + '>');
      } else if (j$.isArray_(value) || j$.isA_('Object', value)) {
        this.seen.push(value);
        if (j$.isArray_(value)) {
          this.emitArray(value);
        } else {
          this.emitObject(value);
        }
        this.seen.pop();
      } else {
        this.emitScalar(value.toString());
      }
    } finally {
      this.ppNestLevel_--;
    }
  };

  PrettyPrinter.prototype.iterateObject = function(obj, fn) {
    for (var property in obj) {
      if (!Object.prototype.hasOwnProperty.call(obj, property)) { continue; }
      fn(property, obj.__lookupGetter__ ? (!j$.util.isUndefined(obj.__lookupGetter__(property)) &&
          obj.__lookupGetter__(property) !== null) : false);
    }
  };

  PrettyPrinter.prototype.emitArray = j$.unimplementedMethod_;
  PrettyPrinter.prototype.emitObject = j$.unimplementedMethod_;
  PrettyPrinter.prototype.emitScalar = j$.unimplementedMethod_;
  PrettyPrinter.prototype.emitString = j$.unimplementedMethod_;

  function StringPrettyPrinter() {
    PrettyPrinter.call(this);

    this.string = '';
  }

  j$.util.inherit(StringPrettyPrinter, PrettyPrinter);

  StringPrettyPrinter.prototype.emitScalar = function(value) {
    this.append(value);
  };

  StringPrettyPrinter.prototype.emitString = function(value) {
    this.append('\'' + value + '\'');
  };

  StringPrettyPrinter.prototype.emitArray = function(array) {
    if (this.ppNestLevel_ > j$.MAX_PRETTY_PRINT_DEPTH) {
      this.append('Array');
      return;
    }
    var length = Math.min(array.length, j$.MAX_PRETTY_PRINT_ARRAY_LENGTH);
    this.append('[ ');
    for (var i = 0; i < length; i++) {
      if (i > 0) {
        this.append(', ');
      }
      this.format(array[i]);
    }
    if(array.length > length){
      this.append(', ...');
    }

    var self = this;
    var first = array.length === 0;
    this.iterateObject(array, function(property, isGetter) {
      if (property.match(/^\d+$/)) {
        return;
      }

      if (first) {
        first = false;
      } else {
        self.append(', ');
      }

      self.formatProperty(array, property, isGetter);
    });

    this.append(' ]');
  };

  StringPrettyPrinter.prototype.emitObject = function(obj) {
    var constructorName = obj.constructor ? j$.fnNameFor(obj.constructor) : 'null';
    this.append(constructorName);

    if (this.ppNestLevel_ > j$.MAX_PRETTY_PRINT_DEPTH) {
      return;
    }

    var self = this;
    this.append('({ ');
    var first = true;

    this.iterateObject(obj, function(property, isGetter) {
      if (first) {
        first = false;
      } else {
        self.append(', ');
      }

      self.formatProperty(obj, property, isGetter);
    });

    this.append(' })');
  };

  StringPrettyPrinter.prototype.formatProperty = function(obj, property, isGetter) {
      this.append(property);
      this.append(': ');
      if (isGetter) {
        this.append('<getter>');
      } else {
        this.format(obj[property]);
      }
  };

  StringPrettyPrinter.prototype.append = function(value) {
    this.string += value;
  };

  return function(value) {
    var stringPrettyPrinter = new StringPrettyPrinter();
    stringPrettyPrinter.format(value);
    return stringPrettyPrinter.string;
  };
};

getJasmineRequireObj().QueueRunner = function(j$) {

  function once(fn) {
    var called = false;
    return function() {
      if (!called) {
        called = true;
        fn();
      }
    };
  }

  function QueueRunner(attrs) {
    this.queueableFns = attrs.queueableFns || [];
    this.onComplete = attrs.onComplete || function() {};
    this.clearStack = attrs.clearStack || function(fn) {fn();};
    this.onException = attrs.onException || function() {};
    this.catchException = attrs.catchException || function() { return true; };
    this.userContext = attrs.userContext || {};
    this.timeout = attrs.timeout || {setTimeout: setTimeout, clearTimeout: clearTimeout};
    this.fail = attrs.fail || function() {};
  }

  QueueRunner.prototype.execute = function() {
    this.run(this.queueableFns, 0);
  };

  QueueRunner.prototype.run = function(queueableFns, recursiveIndex) {
    var length = queueableFns.length,
      self = this,
      iterativeIndex;


    for(iterativeIndex = recursiveIndex; iterativeIndex < length; iterativeIndex++) {
      var queueableFn = queueableFns[iterativeIndex];
      if (queueableFn.fn.length > 0) {
        attemptAsync(queueableFn);
        return;
      } else {
        attemptSync(queueableFn);
      }
    }

    var runnerDone = iterativeIndex >= length;

    if (runnerDone) {
      this.clearStack(this.onComplete);
    }

    function attemptSync(queueableFn) {
      try {
        queueableFn.fn.call(self.userContext);
      } catch (e) {
        handleException(e, queueableFn);
      }
    }

    function attemptAsync(queueableFn) {
      var clearTimeout = function () {
          Function.prototype.apply.apply(self.timeout.clearTimeout, [j$.getGlobal(), [timeoutId]]);
        },
        next = once(function () {
          clearTimeout(timeoutId);
          self.run(queueableFns, iterativeIndex + 1);
        }),
        timeoutId;

      next.fail = function() {
        self.fail.apply(null, arguments);
        next();
      };

      if (queueableFn.timeout) {
        timeoutId = Function.prototype.apply.apply(self.timeout.setTimeout, [j$.getGlobal(), [function() {
          var error = new Error('Timeout - Async callback was not invoked within timeout specified by jasmine.DEFAULT_TIMEOUT_INTERVAL.');
          onException(error);
          next();
        }, queueableFn.timeout()]]);
      }

      try {
        queueableFn.fn.call(self.userContext, next);
      } catch (e) {
        handleException(e, queueableFn);
        next();
      }
    }

    function onException(e) {
      self.onException(e);
    }

    function handleException(e, queueableFn) {
      onException(e);
      if (!self.catchException(e)) {
        //TODO: set a var when we catch an exception and
        //use a finally block to close the loop in a nice way..
        throw e;
      }
    }
  };

  return QueueRunner;
};

getJasmineRequireObj().ReportDispatcher = function() {
  function ReportDispatcher(methods) {

    var dispatchedMethods = methods || [];

    for (var i = 0; i < dispatchedMethods.length; i++) {
      var method = dispatchedMethods[i];
      this[method] = (function(m) {
        return function() {
          dispatch(m, arguments);
        };
      }(method));
    }

    var reporters = [];

    this.addReporter = function(reporter) {
      reporters.push(reporter);
    };

    return this;

    function dispatch(method, args) {
      for (var i = 0; i < reporters.length; i++) {
        var reporter = reporters[i];
        if (reporter[method]) {
          reporter[method].apply(reporter, args);
        }
      }
    }
  }

  return ReportDispatcher;
};


getJasmineRequireObj().SpyRegistry = function(j$) {

  function SpyRegistry(options) {
    options = options || {};
    var currentSpies = options.currentSpies || function() { return []; };

    this.spyOn = function(obj, methodName) {
      if (j$.util.isUndefined(obj)) {
        throw new Error('spyOn could not find an object to spy upon for ' + methodName + '()');
      }

      if (j$.util.isUndefined(methodName)) {
        throw new Error('No method name supplied');
      }

      if (j$.util.isUndefined(obj[methodName])) {
        throw new Error(methodName + '() method does not exist');
      }

      if (obj[methodName] && j$.isSpy(obj[methodName])) {
        //TODO?: should this return the current spy? Downside: may cause user confusion about spy state
        throw new Error(methodName + ' has already been spied upon');
      }

      var descriptor;
      try {
        descriptor = Object.getOwnPropertyDescriptor(obj, methodName);
      } catch(e) {
        // IE 8 doesn't support \`definePropery\` on non-DOM nodes
      }

      if (descriptor && !(descriptor.writable || descriptor.set)) {
        throw new Error(methodName + ' is not declared writable or has no setter');
      }

      var spy = j$.createSpy(methodName, obj[methodName]);

      currentSpies().push({
        spy: spy,
        baseObj: obj,
        methodName: methodName,
        originalValue: obj[methodName]
      });

      obj[methodName] = spy;

      return spy;
    };

    this.clearSpies = function() {
      var spies = currentSpies();
      for (var i = 0; i < spies.length; i++) {
        var spyEntry = spies[i];
        spyEntry.baseObj[spyEntry.methodName] = spyEntry.originalValue;
      }
    };
  }

  return SpyRegistry;
};

getJasmineRequireObj().SpyStrategy = function() {

  function SpyStrategy(options) {
    options = options || {};

    var identity = options.name || 'unknown',
        originalFn = options.fn || function() {},
        getSpy = options.getSpy || function() {},
        plan = function() {};

    this.identity = function() {
      return identity;
    };

    this.exec = function() {
      return plan.apply(this, arguments);
    };

    this.callThrough = function() {
      plan = originalFn;
      return getSpy();
    };

    this.returnValue = function(value) {
      plan = function() {
        return value;
      };
      return getSpy();
    };

    this.returnValues = function() {
      var values = Array.prototype.slice.call(arguments);
      plan = function () {
        return values.shift();
      };
      return getSpy();
    };

    this.throwError = function(something) {
      var error = (something instanceof Error) ? something : new Error(something);
      plan = function() {
        throw error;
      };
      return getSpy();
    };

    this.callFake = function(fn) {
      plan = fn;
      return getSpy();
    };

    this.stub = function(fn) {
      plan = function() {};
      return getSpy();
    };
  }

  return SpyStrategy;
};

getJasmineRequireObj().Suite = function(j$) {
  function Suite(attrs) {
    this.env = attrs.env;
    this.id = attrs.id;
    this.parentSuite = attrs.parentSuite;
    this.description = attrs.description;
    this.expectationFactory = attrs.expectationFactory;
    this.expectationResultFactory = attrs.expectationResultFactory;
    this.throwOnExpectationFailure = !!attrs.throwOnExpectationFailure;

    this.beforeFns = [];
    this.afterFns = [];
    this.beforeAllFns = [];
    this.afterAllFns = [];
    this.disabled = false;

    this.children = [];

    this.result = {
      id: this.id,
      description: this.description,
      fullName: this.getFullName(),
      failedExpectations: []
    };
  }

  Suite.prototype.expect = function(actual) {
    return this.expectationFactory(actual, this);
  };

  Suite.prototype.getFullName = function() {
    var fullName = this.description;
    for (var parentSuite = this.parentSuite; parentSuite; parentSuite = parentSuite.parentSuite) {
      if (parentSuite.parentSuite) {
        fullName = parentSuite.description + ' ' + fullName;
      }
    }
    return fullName;
  };

  Suite.prototype.disable = function() {
    this.disabled = true;
  };

  Suite.prototype.pend = function(message) {
    this.markedPending = true;
  };

  Suite.prototype.beforeEach = function(fn) {
    this.beforeFns.unshift(fn);
  };

  Suite.prototype.beforeAll = function(fn) {
    this.beforeAllFns.push(fn);
  };

  Suite.prototype.afterEach = function(fn) {
    this.afterFns.unshift(fn);
  };

  Suite.prototype.afterAll = function(fn) {
    this.afterAllFns.push(fn);
  };

  Suite.prototype.addChild = function(child) {
    this.children.push(child);
  };

  Suite.prototype.status = function() {
    if (this.disabled) {
      return 'disabled';
    }

    if (this.markedPending) {
      return 'pending';
    }

    if (this.result.failedExpectations.length > 0) {
      return 'failed';
    } else {
      return 'finished';
    }
  };

  Suite.prototype.isExecutable = function() {
    return !this.disabled;
  };

  Suite.prototype.canBeReentered = function() {
    return this.beforeAllFns.length === 0 && this.afterAllFns.length === 0;
  };

  Suite.prototype.getResult = function() {
    this.result.status = this.status();
    return this.result;
  };

  Suite.prototype.sharedUserContext = function() {
    if (!this.sharedContext) {
      this.sharedContext = this.parentSuite ? clone(this.parentSuite.sharedUserContext()) : {};
    }

    return this.sharedContext;
  };

  Suite.prototype.clonedSharedUserContext = function() {
    return clone(this.sharedUserContext());
  };

  Suite.prototype.onException = function() {
    if (arguments[0] instanceof j$.errors.ExpectationFailed) {
      return;
    }

    if(isAfterAll(this.children)) {
      var data = {
        matcherName: '',
        passed: false,
        expected: '',
        actual: '',
        error: arguments[0]
      };
      this.result.failedExpectations.push(this.expectationResultFactory(data));
    } else {
      for (var i = 0; i < this.children.length; i++) {
        var child = this.children[i];
        child.onException.apply(child, arguments);
      }
    }
  };

  Suite.prototype.addExpectationResult = function () {
    if(isAfterAll(this.children) && isFailure(arguments)){
      var data = arguments[1];
      this.result.failedExpectations.push(this.expectationResultFactory(data));
      if(this.throwOnExpectationFailure) {
        throw new j$.errors.ExpectationFailed();
      }
    } else {
      for (var i = 0; i < this.children.length; i++) {
        var child = this.children[i];
        try {
          child.addExpectationResult.apply(child, arguments);
        } catch(e) {
          // keep going
        }
      }
    }
  };

  function isAfterAll(children) {
    return children && children[0].result.status;
  }

  function isFailure(args) {
    return !args[0];
  }

  function clone(obj) {
    var clonedObj = {};
    for (var prop in obj) {
      if (obj.hasOwnProperty(prop)) {
        clonedObj[prop] = obj[prop];
      }
    }

    return clonedObj;
  }

  return Suite;
};

if (typeof window == void 0 && typeof exports == 'object') {
  exports.Suite = jasmineRequire.Suite;
}

getJasmineRequireObj().Timer = function() {
  var defaultNow = (function(Date) {
    return function() { return new Date().getTime(); };
  })(Date);

  function Timer(options) {
    options = options || {};

    var now = options.now || defaultNow,
      startTime;

    this.start = function() {
      startTime = now();
    };

    this.elapsed = function() {
      return now() - startTime;
    };
  }

  return Timer;
};

getJasmineRequireObj().TreeProcessor = function() {
  function TreeProcessor(attrs) {
    var tree = attrs.tree,
        runnableIds = attrs.runnableIds,
        queueRunnerFactory = attrs.queueRunnerFactory,
        nodeStart = attrs.nodeStart || function() {},
        nodeComplete = attrs.nodeComplete || function() {},
        orderChildren = attrs.orderChildren || function(node) { return node.children; },
        stats = { valid: true },
        processed = false,
        defaultMin = Infinity,
        defaultMax = 1 - Infinity;

    this.processTree = function() {
      processNode(tree, false);
      processed = true;
      return stats;
    };

    this.execute = function(done) {
      if (!processed) {
        this.processTree();
      }

      if (!stats.valid) {
        throw 'invalid order';
      }

      var childFns = wrapChildren(tree, 0);

      queueRunnerFactory({
        queueableFns: childFns,
        userContext: tree.sharedUserContext(),
        onException: function() {
          tree.onException.apply(tree, arguments);
        },
        onComplete: done
      });
    };

    function runnableIndex(id) {
      for (var i = 0; i < runnableIds.length; i++) {
        if (runnableIds[i] === id) {
          return i;
        }
      }
    }

    function processNode(node, parentEnabled) {
      var executableIndex = runnableIndex(node.id);

      if (executableIndex !== undefined) {
        parentEnabled = true;
      }

      parentEnabled = parentEnabled && node.isExecutable();

      if (!node.children) {
        stats[node.id] = {
          executable: parentEnabled && node.isExecutable(),
          segments: [{
            index: 0,
            owner: node,
            nodes: [node],
            min: startingMin(executableIndex),
            max: startingMax(executableIndex)
          }]
        };
      } else {
        var hasExecutableChild = false;

        var orderedChildren = orderChildren(node);

        for (var i = 0; i < orderedChildren.length; i++) {
          var child = orderedChildren[i];

          processNode(child, parentEnabled);

          if (!stats.valid) {
            return;
          }

          var childStats = stats[child.id];

          hasExecutableChild = hasExecutableChild || childStats.executable;
        }

        stats[node.id] = {
          executable: hasExecutableChild
        };

        segmentChildren(node, orderedChildren, stats[node.id], executableIndex);

        if (!node.canBeReentered() && stats[node.id].segments.length > 1) {
          stats = { valid: false };
        }
      }
    }

    function startingMin(executableIndex) {
      return executableIndex === undefined ? defaultMin : executableIndex;
    }

    function startingMax(executableIndex) {
      return executableIndex === undefined ? defaultMax : executableIndex;
    }

    function segmentChildren(node, orderedChildren, nodeStats, executableIndex) {
      var currentSegment = { index: 0, owner: node, nodes: [], min: startingMin(executableIndex), max: startingMax(executableIndex) },
          result = [currentSegment],
          lastMax = defaultMax,
          orderedChildSegments = orderChildSegments(orderedChildren);

      function isSegmentBoundary(minIndex) {
        return lastMax !== defaultMax && minIndex !== defaultMin && lastMax < minIndex - 1;
      }

      for (var i = 0; i < orderedChildSegments.length; i++) {
        var childSegment = orderedChildSegments[i],
          maxIndex = childSegment.max,
          minIndex = childSegment.min;

        if (isSegmentBoundary(minIndex)) {
          currentSegment = {index: result.length, owner: node, nodes: [], min: defaultMin, max: defaultMax};
          result.push(currentSegment);
        }

        currentSegment.nodes.push(childSegment);
        currentSegment.min = Math.min(currentSegment.min, minIndex);
        currentSegment.max = Math.max(currentSegment.max, maxIndex);
        lastMax = maxIndex;
      }

      nodeStats.segments = result;
    }

    function orderChildSegments(children) {
      var specifiedOrder = [],
          unspecifiedOrder = [];

      for (var i = 0; i < children.length; i++) {
        var child = children[i],
            segments = stats[child.id].segments;

        for (var j = 0; j < segments.length; j++) {
          var seg = segments[j];

          if (seg.min === defaultMin) {
            unspecifiedOrder.push(seg);
          } else {
            specifiedOrder.push(seg);
          }
        }
      }

      specifiedOrder.sort(function(a, b) {
        return a.min - b.min;
      });

      return specifiedOrder.concat(unspecifiedOrder);
    }

    function executeNode(node, segmentNumber) {
      if (node.children) {
        return {
          fn: function(done) {
            nodeStart(node);

            queueRunnerFactory({
              onComplete: function() {
                nodeComplete(node, node.getResult());
                done();
              },
              queueableFns: wrapChildren(node, segmentNumber),
              userContext: node.sharedUserContext(),
              onException: function() {
                node.onException.apply(node, arguments);
              }
            });
          }
        };
      } else {
        return {
          fn: function(done) { node.execute(done, stats[node.id].executable); }
        };
      }
    }

    function wrapChildren(node, segmentNumber) {
      var result = [],
          segmentChildren = stats[node.id].segments[segmentNumber].nodes;

      for (var i = 0; i < segmentChildren.length; i++) {
        result.push(executeNode(segmentChildren[i].owner, segmentChildren[i].index));
      }

      if (!stats[node.id].executable) {
        return result;
      }

      return node.beforeAllFns.concat(result).concat(node.afterAllFns);
    }
  }

  return TreeProcessor;
};

getJasmineRequireObj().Any = function(j$) {

  function Any(expectedObject) {
    if (typeof expectedObject === 'undefined') {
      throw new TypeError(
        'jasmine.any() expects to be passed a constructor function. ' +
        'Please pass one or use jasmine.anything() to match any object.'
      );
    }
    this.expectedObject = expectedObject;
  }

  Any.prototype.asymmetricMatch = function(other) {
    if (this.expectedObject == String) {
      return typeof other == 'string' || other instanceof String;
    }

    if (this.expectedObject == Number) {
      return typeof other == 'number' || other instanceof Number;
    }

    if (this.expectedObject == Function) {
      return typeof other == 'function' || other instanceof Function;
    }

    if (this.expectedObject == Object) {
      return typeof other == 'object';
    }

    if (this.expectedObject == Boolean) {
      return typeof other == 'boolean';
    }

    return other instanceof this.expectedObject;
  };

  Any.prototype.jasmineToString = function() {
    return '<jasmine.any(' + j$.fnNameFor(this.expectedObject) + ')>';
  };

  return Any;
};

getJasmineRequireObj().Anything = function(j$) {

  function Anything() {}

  Anything.prototype.asymmetricMatch = function(other) {
    return !j$.util.isUndefined(other) && other !== null;
  };

  Anything.prototype.jasmineToString = function() {
    return '<jasmine.anything>';
  };

  return Anything;
};

getJasmineRequireObj().ArrayContaining = function(j$) {
  function ArrayContaining(sample) {
    this.sample = sample;
  }

  ArrayContaining.prototype.asymmetricMatch = function(other) {
    var className = Object.prototype.toString.call(this.sample);
    if (className !== '[object Array]') { throw new Error('You must provide an array to arrayContaining, not \'' + this.sample + '\'.'); }

    for (var i = 0; i < this.sample.length; i++) {
      var item = this.sample[i];
      if (!j$.matchersUtil.contains(other, item)) {
        return false;
      }
    }

    return true;
  };

  ArrayContaining.prototype.jasmineToString = function () {
    return '<jasmine.arrayContaining(' + jasmine.pp(this.sample) +')>';
  };

  return ArrayContaining;
};

getJasmineRequireObj().ObjectContaining = function(j$) {

  function ObjectContaining(sample) {
    this.sample = sample;
  }

  function getPrototype(obj) {
    if (Object.getPrototypeOf) {
      return Object.getPrototypeOf(obj);
    }

    if (obj.constructor.prototype == obj) {
      return null;
    }

    return obj.constructor.prototype;
  }

  function hasProperty(obj, property) {
    if (!obj) {
      return false;
    }

    if (Object.prototype.hasOwnProperty.call(obj, property)) {
      return true;
    }

    return hasProperty(getPrototype(obj), property);
  }

  ObjectContaining.prototype.asymmetricMatch = function(other) {
    if (typeof(this.sample) !== 'object') { throw new Error('You must provide an object to objectContaining, not \''+this.sample+'\'.'); }

    for (var property in this.sample) {
      if (!hasProperty(other, property) ||
          !j$.matchersUtil.equals(this.sample[property], other[property])) {
        return false;
      }
    }

    return true;
  };

  ObjectContaining.prototype.jasmineToString = function() {
    return '<jasmine.objectContaining(' + j$.pp(this.sample) + ')>';
  };

  return ObjectContaining;
};

getJasmineRequireObj().StringMatching = function(j$) {

  function StringMatching(expected) {
    if (!j$.isString_(expected) && !j$.isA_('RegExp', expected)) {
      throw new Error('Expected is not a String or a RegExp');
    }

    this.regexp = new RegExp(expected);
  }

  StringMatching.prototype.asymmetricMatch = function(other) {
    return this.regexp.test(other);
  };

  StringMatching.prototype.jasmineToString = function() {
    return '<jasmine.stringMatching(' + this.regexp + ')>';
  };

  return StringMatching;
};

getJasmineRequireObj().errors = function() {
  function ExpectationFailed() {}

  ExpectationFailed.prototype = new Error();
  ExpectationFailed.prototype.constructor = ExpectationFailed;

  return {
    ExpectationFailed: ExpectationFailed
  };
};
getJasmineRequireObj().matchersUtil = function(j$) {
  // TODO: what to do about jasmine.pp not being inject? move to JSON.stringify? gut PrettyPrinter?

  return {
    equals: function(a, b, customTesters) {
      customTesters = customTesters || [];

      return eq(a, b, [], [], customTesters);
    },

    contains: function(haystack, needle, customTesters) {
      customTesters = customTesters || [];

      if ((Object.prototype.toString.apply(haystack) === '[object Array]') ||
        (!!haystack && !haystack.indexOf))
      {
        for (var i = 0; i < haystack.length; i++) {
          if (eq(haystack[i], needle, [], [], customTesters)) {
            return true;
          }
        }
        return false;
      }

      return !!haystack && haystack.indexOf(needle) >= 0;
    },

    buildFailureMessage: function() {
      var args = Array.prototype.slice.call(arguments, 0),
        matcherName = args[0],
        isNot = args[1],
        actual = args[2],
        expected = args.slice(3),
        englishyPredicate = matcherName.replace(/[A-Z]/g, function(s) { return ' ' + s.toLowerCase(); });

      var message = 'Expected ' +
        j$.pp(actual) +
        (isNot ? ' not ' : ' ') +
        englishyPredicate;

      if (expected.length > 0) {
        for (var i = 0; i < expected.length; i++) {
          if (i > 0) {
            message += ',';
          }
          message += ' ' + j$.pp(expected[i]);
        }
      }

      return message + '.';
    }
  };

  function isAsymmetric(obj) {
    return obj && j$.isA_('Function', obj.asymmetricMatch);
  }

  function asymmetricMatch(a, b) {
    var asymmetricA = isAsymmetric(a),
        asymmetricB = isAsymmetric(b);

    if (asymmetricA && asymmetricB) {
      return undefined;
    }

    if (asymmetricA) {
      return a.asymmetricMatch(b);
    }

    if (asymmetricB) {
      return b.asymmetricMatch(a);
    }
  }

  // Equality function lovingly adapted from isEqual in
  //   [Underscore](http://underscorejs.org)
  function eq(a, b, aStack, bStack, customTesters) {
    var result = true;

    var asymmetricResult = asymmetricMatch(a, b);
    if (!j$.util.isUndefined(asymmetricResult)) {
      return asymmetricResult;
    }

    for (var i = 0; i < customTesters.length; i++) {
      var customTesterResult = customTesters[i](a, b);
      if (!j$.util.isUndefined(customTesterResult)) {
        return customTesterResult;
      }
    }

    if (a instanceof Error && b instanceof Error) {
      return a.message == b.message;
    }

    // Identical objects are equal. \`0 === -0\`, but they aren't identical.
    // See the [Harmony \`egal\` proposal](http://wiki.ecmascript.org/doku.php?id=harmony:egal).
    if (a === b) { return a !== 0 || 1 / a == 1 / b; }
    // A strict comparison is necessary because \`null == undefined\`.
    if (a === null || b === null) { return a === b; }
    var className = Object.prototype.toString.call(a);
    if (className != Object.prototype.toString.call(b)) { return false; }
    switch (className) {
      // Strings, numbers, dates, and booleans are compared by value.
      case '[object String]':
        // Primitives and their corresponding object wrappers are equivalent; thus, \`"5"\` is
        // equivalent to \`new String("5")\`.
        return a == String(b);
      case '[object Number]':
        // \`NaN\`s are equivalent, but non-reflexive. An \`egal\` comparison is performed for
        // other numeric values.
        return a != +a ? b != +b : (a === 0 ? 1 / a == 1 / b : a == +b);
      case '[object Date]':
      case '[object Boolean]':
        // Coerce dates and booleans to numeric primitive values. Dates are compared by their
        // millisecond representations. Note that invalid dates with millisecond representations
        // of \`NaN\` are not equivalent.
        return +a == +b;
      // RegExps are compared by their source patterns and flags.
      case '[object RegExp]':
        return a.source == b.source &&
          a.global == b.global &&
          a.multiline == b.multiline &&
          a.ignoreCase == b.ignoreCase;
    }
    if (typeof a != 'object' || typeof b != 'object') { return false; }

    var aIsDomNode = j$.isDomNode(a);
    var bIsDomNode = j$.isDomNode(b);
    if (aIsDomNode && bIsDomNode) {
      // At first try to use DOM3 method isEqualNode
      if (a.isEqualNode) {
        return a.isEqualNode(b);
      }
      // IE8 doesn't support isEqualNode, try to use outerHTML && innerText
      var aIsElement = a instanceof Element;
      var bIsElement = b instanceof Element;
      if (aIsElement && bIsElement) {
        return a.outerHTML == b.outerHTML;
      }
      if (aIsElement || bIsElement) {
        return false;
      }
      return a.innerText == b.innerText && a.textContent == b.textContent;
    }
    if (aIsDomNode || bIsDomNode) {
      return false;
    }

    // Assume equality for cyclic structures. The algorithm for detecting cyclic
    // structures is adapted from ES 5.1 section 15.12.3, abstract operation \`JO\`.
    var length = aStack.length;
    while (length--) {
      // Linear search. Performance is inversely proportional to the number of
      // unique nested structures.
      if (aStack[length] == a) { return bStack[length] == b; }
    }
    // Add the first object to the stack of traversed objects.
    aStack.push(a);
    bStack.push(b);
    var size = 0;
    // Recursively compare objects and arrays.
    // Compare array lengths to determine if a deep comparison is necessary.
    if (className == '[object Array]' && a.length !== b.length) {
      result = false;
    }

    if (result) {
      // Objects with different constructors are not equivalent, but \`Object\`s
      // or \`Array\`s from different frames are.
      if (className !== '[object Array]') {
        var aCtor = a.constructor, bCtor = b.constructor;
        if (aCtor !== bCtor && !(isFunction(aCtor) && aCtor instanceof aCtor &&
               isFunction(bCtor) && bCtor instanceof bCtor)) {
          return false;
        }
      }
      // Deep compare objects.
      for (var key in a) {
        if (has(a, key)) {
          // Count the expected number of properties.
          size++;
          // Deep compare each member.
          if (!(result = has(b, key) && eq(a[key], b[key], aStack, bStack, customTesters))) { break; }
        }
      }
      // Ensure that both objects contain the same number of properties.
      if (result) {
        for (key in b) {
          if (has(b, key) && !(size--)) { break; }
        }
        result = !size;
      }
    }
    // Remove the first object from the stack of traversed objects.
    aStack.pop();
    bStack.pop();

    return result;

    function has(obj, key) {
      return Object.prototype.hasOwnProperty.call(obj, key);
    }

    function isFunction(obj) {
      return typeof obj === 'function';
    }
  }
};

getJasmineRequireObj().toBe = function() {
  function toBe() {
    return {
      compare: function(actual, expected) {
        return {
          pass: actual === expected
        };
      }
    };
  }

  return toBe;
};

getJasmineRequireObj().toBeCloseTo = function() {

  function toBeCloseTo() {
    return {
      compare: function(actual, expected, precision) {
        if (precision !== 0) {
          precision = precision || 2;
        }

        return {
          pass: Math.abs(expected - actual) < (Math.pow(10, -precision) / 2)
        };
      }
    };
  }

  return toBeCloseTo;
};

getJasmineRequireObj().toBeDefined = function() {
  function toBeDefined() {
    return {
      compare: function(actual) {
        return {
          pass: (void 0 !== actual)
        };
      }
    };
  }

  return toBeDefined;
};

getJasmineRequireObj().toBeFalsy = function() {
  function toBeFalsy() {
    return {
      compare: function(actual) {
        return {
          pass: !!!actual
        };
      }
    };
  }

  return toBeFalsy;
};

getJasmineRequireObj().toBeGreaterThan = function() {

  function toBeGreaterThan() {
    return {
      compare: function(actual, expected) {
        return {
          pass: actual > expected
        };
      }
    };
  }

  return toBeGreaterThan;
};


getJasmineRequireObj().toBeLessThan = function() {
  function toBeLessThan() {
    return {

      compare: function(actual, expected) {
        return {
          pass: actual < expected
        };
      }
    };
  }

  return toBeLessThan;
};
getJasmineRequireObj().toBeNaN = function(j$) {

  function toBeNaN() {
    return {
      compare: function(actual) {
        var result = {
          pass: (actual !== actual)
        };

        if (result.pass) {
          result.message = 'Expected actual not to be NaN.';
        } else {
          result.message = function() { return 'Expected ' + j$.pp(actual) + ' to be NaN.'; };
        }

        return result;
      }
    };
  }

  return toBeNaN;
};

getJasmineRequireObj().toBeNull = function() {

  function toBeNull() {
    return {
      compare: function(actual) {
        return {
          pass: actual === null
        };
      }
    };
  }

  return toBeNull;
};

getJasmineRequireObj().toBeTruthy = function() {

  function toBeTruthy() {
    return {
      compare: function(actual) {
        return {
          pass: !!actual
        };
      }
    };
  }

  return toBeTruthy;
};

getJasmineRequireObj().toBeUndefined = function() {

  function toBeUndefined() {
    return {
      compare: function(actual) {
        return {
          pass: void 0 === actual
        };
      }
    };
  }

  return toBeUndefined;
};

getJasmineRequireObj().toContain = function() {
  function toContain(util, customEqualityTesters) {
    customEqualityTesters = customEqualityTesters || [];

    return {
      compare: function(actual, expected) {

        return {
          pass: util.contains(actual, expected, customEqualityTesters)
        };
      }
    };
  }

  return toContain;
};

getJasmineRequireObj().toEqual = function() {

  function toEqual(util, customEqualityTesters) {
    customEqualityTesters = customEqualityTesters || [];

    return {
      compare: function(actual, expected) {
        var result = {
          pass: false
        };

        result.pass = util.equals(actual, expected, customEqualityTesters);

        return result;
      }
    };
  }

  return toEqual;
};

getJasmineRequireObj().toHaveBeenCalled = function(j$) {

  function toHaveBeenCalled() {
    return {
      compare: function(actual) {
        var result = {};

        if (!j$.isSpy(actual)) {
          throw new Error('Expected a spy, but got ' + j$.pp(actual) + '.');
        }

        if (arguments.length > 1) {
          throw new Error('toHaveBeenCalled does not take arguments, use toHaveBeenCalledWith');
        }

        result.pass = actual.calls.any();

        result.message = result.pass ?
          'Expected spy ' + actual.and.identity() + ' not to have been called.' :
          'Expected spy ' + actual.and.identity() + ' to have been called.';

        return result;
      }
    };
  }

  return toHaveBeenCalled;
};

getJasmineRequireObj().toHaveBeenCalledTimes = function(j$) {

  function toHaveBeenCalledTimes() {
    return {
      compare: function(actual, expected) {
        if (!j$.isSpy(actual)) {
          throw new Error('Expected a spy, but got ' + j$.pp(actual) + '.');
        }

        var args = Array.prototype.slice.call(arguments, 0),
          result = { pass: false };

        if(!expected){
          throw new Error('Expected times failed is required as an argument.');
        }

        actual = args[0];
        var calls = actual.calls.count();
        var timesMessage = expected === 1 ? 'once' : expected + ' times';
        result.pass = calls === expected;
        result.message = result.pass ?
          'Expected spy ' + actual.and.identity() + ' not to have been called ' + timesMessage + '. It was called ' +  calls + ' times.' :
          'Expected spy ' + actual.and.identity() + ' to have been called ' + timesMessage + '. It was called ' +  calls + ' times.';
        return result;
      }
    };
  }

  return toHaveBeenCalledTimes;
};

getJasmineRequireObj().toHaveBeenCalledWith = function(j$) {

  function toHaveBeenCalledWith(util, customEqualityTesters) {
    return {
      compare: function() {
        var args = Array.prototype.slice.call(arguments, 0),
          actual = args[0],
          expectedArgs = args.slice(1),
          result = { pass: false };

        if (!j$.isSpy(actual)) {
          throw new Error('Expected a spy, but got ' + j$.pp(actual) + '.');
        }

        if (!actual.calls.any()) {
          result.message = function() { return 'Expected spy ' + actual.and.identity() + ' to have been called with ' + j$.pp(expectedArgs) + ' but it was never called.'; };
          return result;
        }

        if (util.contains(actual.calls.allArgs(), expectedArgs, customEqualityTesters)) {
          result.pass = true;
          result.message = function() { return 'Expected spy ' + actual.and.identity() + ' not to have been called with ' + j$.pp(expectedArgs) + ' but it was.'; };
        } else {
          result.message = function() { return 'Expected spy ' + actual.and.identity() + ' to have been called with ' + j$.pp(expectedArgs) + ' but actual calls were ' + j$.pp(actual.calls.allArgs()).replace(/^\[ | \]$/g, '') + '.'; };
        }

        return result;
      }
    };
  }

  return toHaveBeenCalledWith;
};

getJasmineRequireObj().toMatch = function(j$) {

  function toMatch() {
    return {
      compare: function(actual, expected) {
        if (!j$.isString_(expected) && !j$.isA_('RegExp', expected)) {
          throw new Error('Expected is not a String or a RegExp');
        }

        var regexp = new RegExp(expected);

        return {
          pass: regexp.test(actual)
        };
      }
    };
  }

  return toMatch;
};

getJasmineRequireObj().toThrow = function(j$) {

  function toThrow(util) {
    return {
      compare: function(actual, expected) {
        var result = { pass: false },
          threw = false,
          thrown;

        if (typeof actual != 'function') {
          throw new Error('Actual is not a Function');
        }

        try {
          actual();
        } catch (e) {
          threw = true;
          thrown = e;
        }

        if (!threw) {
          result.message = 'Expected function to throw an exception.';
          return result;
        }

        if (arguments.length == 1) {
          result.pass = true;
          result.message = function() { return 'Expected function not to throw, but it threw ' + j$.pp(thrown) + '.'; };

          return result;
        }

        if (util.equals(thrown, expected)) {
          result.pass = true;
          result.message = function() { return 'Expected function not to throw ' + j$.pp(expected) + '.'; };
        } else {
          result.message = function() { return 'Expected function to throw ' + j$.pp(expected) + ', but it threw ' +  j$.pp(thrown) + '.'; };
        }

        return result;
      }
    };
  }

  return toThrow;
};

getJasmineRequireObj().toThrowError = function(j$) {
  function toThrowError () {
    return {
      compare: function(actual) {
        var threw = false,
          pass = {pass: true},
          fail = {pass: false},
          thrown;

        if (typeof actual != 'function') {
          throw new Error('Actual is not a Function');
        }

        var errorMatcher = getMatcher.apply(null, arguments);

        try {
          actual();
        } catch (e) {
          threw = true;
          thrown = e;
        }

        if (!threw) {
          fail.message = 'Expected function to throw an Error.';
          return fail;
        }

        if (!(thrown instanceof Error)) {
          fail.message = function() { return 'Expected function to throw an Error, but it threw ' + j$.pp(thrown) + '.'; };
          return fail;
        }

        if (errorMatcher.hasNoSpecifics()) {
          pass.message = 'Expected function not to throw an Error, but it threw ' + j$.fnNameFor(thrown) + '.';
          return pass;
        }

        if (errorMatcher.matches(thrown)) {
          pass.message = function() {
            return 'Expected function not to throw ' + errorMatcher.errorTypeDescription + errorMatcher.messageDescription() + '.';
          };
          return pass;
        } else {
          fail.message = function() {
            return 'Expected function to throw ' + errorMatcher.errorTypeDescription + errorMatcher.messageDescription() +
              ', but it threw ' + errorMatcher.thrownDescription(thrown) + '.';
          };
          return fail;
        }
      }
    };

    function getMatcher() {
      var expected = null,
          errorType = null;

      if (arguments.length == 2) {
        expected = arguments[1];
        if (isAnErrorType(expected)) {
          errorType = expected;
          expected = null;
        }
      } else if (arguments.length > 2) {
        errorType = arguments[1];
        expected = arguments[2];
        if (!isAnErrorType(errorType)) {
          throw new Error('Expected error type is not an Error.');
        }
      }

      if (expected && !isStringOrRegExp(expected)) {
        if (errorType) {
          throw new Error('Expected error message is not a string or RegExp.');
        } else {
          throw new Error('Expected is not an Error, string, or RegExp.');
        }
      }

      function messageMatch(message) {
        if (typeof expected == 'string') {
          return expected == message;
        } else {
          return expected.test(message);
        }
      }

      return {
        errorTypeDescription: errorType ? j$.fnNameFor(errorType) : 'an exception',
        thrownDescription: function(thrown) {
          var thrownName = errorType ? j$.fnNameFor(thrown.constructor) : 'an exception',
              thrownMessage = '';

          if (expected) {
            thrownMessage = ' with message ' + j$.pp(thrown.message);
          }

          return thrownName + thrownMessage;
        },
        messageDescription: function() {
          if (expected === null) {
            return '';
          } else if (expected instanceof RegExp) {
            return ' with a message matching ' + j$.pp(expected);
          } else {
            return ' with message ' + j$.pp(expected);
          }
        },
        hasNoSpecifics: function() {
          return expected === null && errorType === null;
        },
        matches: function(error) {
          return (errorType === null || error instanceof errorType) &&
            (expected === null || messageMatch(error.message));
        }
      };
    }

    function isStringOrRegExp(potential) {
      return potential instanceof RegExp || (typeof potential == 'string');
    }

    function isAnErrorType(type) {
      if (typeof type !== 'function') {
        return false;
      }

      var Surrogate = function() {};
      Surrogate.prototype = type.prototype;
      return (new Surrogate()) instanceof Error;
    }
  }

  return toThrowError;
};

getJasmineRequireObj().interface = function(jasmine, env) {
  var jasmineInterface = {
    describe: function(description, specDefinitions) {
      return env.describe(description, specDefinitions);
    },

    xdescribe: function(description, specDefinitions) {
      return env.xdescribe(description, specDefinitions);
    },

    fdescribe: function(description, specDefinitions) {
      return env.fdescribe(description, specDefinitions);
    },

    it: function() {
      return env.it.apply(env, arguments);
    },

    xit: function() {
      return env.xit.apply(env, arguments);
    },

    fit: function() {
      return env.fit.apply(env, arguments);
    },

    beforeEach: function() {
      return env.beforeEach.apply(env, arguments);
    },

    afterEach: function() {
      return env.afterEach.apply(env, arguments);
    },

    beforeAll: function() {
      return env.beforeAll.apply(env, arguments);
    },

    afterAll: function() {
      return env.afterAll.apply(env, arguments);
    },

    expect: function(actual) {
      return env.expect(actual);
    },

    pending: function() {
      return env.pending.apply(env, arguments);
    },

    fail: function() {
      return env.fail.apply(env, arguments);
    },

    spyOn: function(obj, methodName) {
      return env.spyOn(obj, methodName);
    },

    jsApiReporter: new jasmine.JsApiReporter({
      timer: new jasmine.Timer()
    }),

    jasmine: jasmine
  };

  jasmine.addCustomEqualityTester = function(tester) {
    env.addCustomEqualityTester(tester);
  };

  jasmine.addMatchers = function(matchers) {
    return env.addMatchers(matchers);
  };

  jasmine.clock = function() {
    return env.clock;
  };

  return jasmineInterface;
};

getJasmineRequireObj().version = function() {
  return '2.4.1';
};
`;

const jasmineHtmlJs = `
/*
Copyright (c) 2008-2015 Pivotal Labs

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
jasmineRequire.html = function(j$) {
  j$.ResultsNode = jasmineRequire.ResultsNode();
  j$.HtmlReporter = jasmineRequire.HtmlReporter(j$);
  j$.QueryString = jasmineRequire.QueryString();
  j$.HtmlSpecFilter = jasmineRequire.HtmlSpecFilter();
};

jasmineRequire.HtmlReporter = function(j$) {

  var noopTimer = {
    start: function() {},
    elapsed: function() { return 0; }
  };

  function HtmlReporter(options) {
    var env = options.env || {},
      getContainer = options.getContainer,
      createElement = options.createElement,
      createTextNode = options.createTextNode,
      onRaiseExceptionsClick = options.onRaiseExceptionsClick || function() {},
      onThrowExpectationsClick = options.onThrowExpectationsClick || function() {},
      onRandomClick = options.onRandomClick || function() {},
      addToExistingQueryString = options.addToExistingQueryString || defaultQueryString,
      timer = options.timer || noopTimer,
      results = [],
      specsExecuted = 0,
      failureCount = 0,
      pendingSpecCount = 0,
      htmlReporterMain,
      symbols,
      failedSuites = [];

    this.initialize = function() {
      clearPrior();
      htmlReporterMain = createDom('div', {className: 'jasmine_html-reporter'},
        createDom('div', {className: 'jasmine-banner'},
          createDom('a', {className: 'jasmine-title', href: 'http://jasmine.github.io/', target: '_blank'}),
          createDom('span', {className: 'jasmine-version'}, j$.version)
        ),
        createDom('ul', {className: 'jasmine-symbol-summary'}),
        createDom('div', {className: 'jasmine-alert'}),
        createDom('div', {className: 'jasmine-results'},
          createDom('div', {className: 'jasmine-failures'})
        )
      );
      getContainer().appendChild(htmlReporterMain);
    };

    var totalSpecsDefined;
    this.jasmineStarted = function(options) {
      totalSpecsDefined = options.totalSpecsDefined || 0;
      timer.start();
    };

    var summary = createDom('div', {className: 'jasmine-summary'});

    var topResults = new j$.ResultsNode({}, '', null),
      currentParent = topResults;

    this.suiteStarted = function(result) {
      currentParent.addChild(result, 'suite');
      currentParent = currentParent.last();
    };

    this.suiteDone = function(result) {
      if (result.status == 'failed') {
        failedSuites.push(result);
      }

      if (currentParent == topResults) {
        return;
      }

      currentParent = currentParent.parent;
    };

    this.specStarted = function(result) {
      currentParent.addChild(result, 'spec');
    };

    var failures = [];
    this.specDone = function(result) {
      if(noExpectations(result) && typeof console !== 'undefined' && typeof console.error !== 'undefined') {
        console.error('Spec \'' + result.fullName + '\' has no expectations.');
      }

      if (result.status != 'disabled') {
        specsExecuted++;
      }

      if (!symbols){
        symbols = find('.jasmine-symbol-summary');
      }

      symbols.appendChild(createDom('li', {
          className: noExpectations(result) ? 'jasmine-empty' : 'jasmine-' + result.status,
          id: 'spec_' + result.id,
          title: result.fullName
        }
      ));

      if (result.status == 'failed') {
        failureCount++;

        var failure =
          createDom('div', {className: 'jasmine-spec-detail jasmine-failed'},
            createDom('div', {className: 'jasmine-description'},
              createDom('a', {title: result.fullName, href: specHref(result)}, result.fullName)
            ),
            createDom('div', {className: 'jasmine-messages'})
          );
        var messages = failure.childNodes[1];

        for (var i = 0; i < result.failedExpectations.length; i++) {
          var expectation = result.failedExpectations[i];
          messages.appendChild(createDom('div', {className: 'jasmine-result-message'}, expectation.message));
          messages.appendChild(createDom('div', {className: 'jasmine-stack-trace'}, expectation.stack));
        }

        failures.push(failure);
      }

      if (result.status == 'pending') {
        pendingSpecCount++;
      }
    };

    this.jasmineDone = function(doneResult) {
      var banner = find('.jasmine-banner');
      var alert = find('.jasmine-alert');
      var order = doneResult && doneResult.order;
      alert.appendChild(createDom('span', {className: 'jasmine-duration'}, 'finished in ' + timer.elapsed() / 1000 + 's'));

      banner.appendChild(
        createDom('div', { className: 'jasmine-run-options' },
          createDom('span', { className: 'jasmine-trigger' }, 'Options'),
          createDom('div', { className: 'jasmine-payload' },
            createDom('div', { className: 'jasmine-exceptions' },
              createDom('input', {
                className: 'jasmine-raise',
                id: 'jasmine-raise-exceptions',
                type: 'checkbox'
              }),
              createDom('label', { className: 'jasmine-label', 'for': 'jasmine-raise-exceptions' }, 'raise exceptions')),
            createDom('div', { className: 'jasmine-throw-failures' },
              createDom('input', {
                className: 'jasmine-throw',
                id: 'jasmine-throw-failures',
                type: 'checkbox'
              }),
              createDom('label', { className: 'jasmine-label', 'for': 'jasmine-throw-failures' }, 'stop spec on expectation failure')),
            createDom('div', { className: 'jasmine-random-order' },
              createDom('input', {
                className: 'jasmine-random',
                id: 'jasmine-random-order',
                type: 'checkbox'
              }),
              createDom('label', { className: 'jasmine-label', 'for': 'jasmine-random-order' }, 'run tests in random order'))
          )
        ));

      var raiseCheckbox = find('#jasmine-raise-exceptions');

      raiseCheckbox.checked = !env.catchingExceptions();
      raiseCheckbox.onclick = onRaiseExceptionsClick;

      var throwCheckbox = find('#jasmine-throw-failures');
      throwCheckbox.checked = env.throwingExpectationFailures();
      throwCheckbox.onclick = onThrowExpectationsClick;

      var randomCheckbox = find('#jasmine-random-order');
      randomCheckbox.checked = env.randomTests();
      randomCheckbox.onclick = onRandomClick;

      var optionsMenu = find('.jasmine-run-options'),
          optionsTrigger = optionsMenu.querySelector('.jasmine-trigger'),
          optionsPayload = optionsMenu.querySelector('.jasmine-payload'),
          isOpen = /\bjasmine-open\b/;

      optionsTrigger.onclick = function() {
        if (isOpen.test(optionsPayload.className)) {
          optionsPayload.className = optionsPayload.className.replace(isOpen, '');
        } else {
          optionsPayload.className += ' jasmine-open';
        }
      };

      if (specsExecuted < totalSpecsDefined) {
        var skippedMessage = 'Ran ' + specsExecuted + ' of ' + totalSpecsDefined + ' specs - run all';
        alert.appendChild(
          createDom('span', {className: 'jasmine-bar jasmine-skipped'},
            createDom('a', {href: '?', title: 'Run all specs'}, skippedMessage)
          )
        );
      }
      var statusBarMessage = '';
      var statusBarClassName = 'jasmine-bar ';

      if (totalSpecsDefined > 0) {
        statusBarMessage += pluralize('spec', specsExecuted) + ', ' + pluralize('failure', failureCount);
        if (pendingSpecCount) { statusBarMessage += ', ' + pluralize('pending spec', pendingSpecCount); }
        statusBarClassName += (failureCount > 0) ? 'jasmine-failed' : 'jasmine-passed';
      } else {
        statusBarClassName += 'jasmine-skipped';
        statusBarMessage += 'No specs found';
      }

      var seedBar;
      if (order && order.random) {
        seedBar = createDom('span', {className: 'jasmine-seed-bar'},
          ', randomized with seed ',
          createDom('a', {title: 'randomized with seed ' + order.seed, href: seedHref(order.seed)}, order.seed)
        );
      }

      alert.appendChild(createDom('span', {className: statusBarClassName}, statusBarMessage, seedBar));

      for(i = 0; i < failedSuites.length; i++) {
        var failedSuite = failedSuites[i];
        for(var j = 0; j < failedSuite.failedExpectations.length; j++) {
          var errorBarMessage = 'AfterAll ' + failedSuite.failedExpectations[j].message;
          var errorBarClassName = 'jasmine-bar jasmine-errored';
          alert.appendChild(createDom('span', {className: errorBarClassName}, errorBarMessage));
        }
      }

      var results = find('.jasmine-results');
      results.appendChild(summary);

      summaryList(topResults, summary);

      function summaryList(resultsTree, domParent) {
        var specListNode;
        for (var i = 0; i < resultsTree.children.length; i++) {
          var resultNode = resultsTree.children[i];
          if (resultNode.type == 'suite') {
            var suiteListNode = createDom('ul', {className: 'jasmine-suite', id: 'suite-' + resultNode.result.id},
              createDom('li', {className: 'jasmine-suite-detail'},
                createDom('a', {href: specHref(resultNode.result)}, resultNode.result.description)
              )
            );

            summaryList(resultNode, suiteListNode);
            domParent.appendChild(suiteListNode);
          }
          if (resultNode.type == 'spec') {
            if (domParent.getAttribute('class') != 'jasmine-specs') {
              specListNode = createDom('ul', {className: 'jasmine-specs'});
              domParent.appendChild(specListNode);
            }
            var specDescription = resultNode.result.description;
            if(noExpectations(resultNode.result)) {
              specDescription = 'SPEC HAS NO EXPECTATIONS ' + specDescription;
            }
            if(resultNode.result.status === 'pending' && resultNode.result.pendingReason !== '') {
              specDescription = specDescription + ' PENDING WITH MESSAGE: ' + resultNode.result.pendingReason;
            }
            specListNode.appendChild(
              createDom('li', {
                  className: 'jasmine-' + resultNode.result.status,
                  id: 'spec-' + resultNode.result.id
                },
                createDom('a', {href: specHref(resultNode.result)}, specDescription)
              )
            );
          }
        }
      }

      if (failures.length) {
        alert.appendChild(
          createDom('span', {className: 'jasmine-menu jasmine-bar jasmine-spec-list'},
            createDom('span', {}, 'Spec List | '),
            createDom('a', {className: 'jasmine-failures-menu', href: '#'}, 'Failures')));
        alert.appendChild(
          createDom('span', {className: 'jasmine-menu jasmine-bar jasmine-failure-list'},
            createDom('a', {className: 'jasmine-spec-list-menu', href: '#'}, 'Spec List'),
            createDom('span', {}, ' | Failures ')));

        find('.jasmine-failures-menu').onclick = function() {
          setMenuModeTo('jasmine-failure-list');
        };
        find('.jasmine-spec-list-menu').onclick = function() {
          setMenuModeTo('jasmine-spec-list');
        };

        setMenuModeTo('jasmine-failure-list');

        var failureNode = find('.jasmine-failures');
        for (var i = 0; i < failures.length; i++) {
          failureNode.appendChild(failures[i]);
        }
      }
    };

    return this;

    function find(selector) {
      return getContainer().querySelector('.jasmine_html-reporter ' + selector);
    }

    function clearPrior() {
      // return the reporter
      var oldReporter = find('');

      if(oldReporter) {
        getContainer().removeChild(oldReporter);
      }
    }

    function createDom(type, attrs, childrenVarArgs) {
      var el = createElement(type);

      for (var i = 2; i < arguments.length; i++) {
        var child = arguments[i];

        if (typeof child === 'string') {
          el.appendChild(createTextNode(child));
        } else {
          if (child) {
            el.appendChild(child);
          }
        }
      }

      for (var attr in attrs) {
        if (attr == 'className') {
          el[attr] = attrs[attr];
        } else {
          el.setAttribute(attr, attrs[attr]);
        }
      }

      return el;
    }

    function pluralize(singular, count) {
      var word = (count == 1 ? singular : singular + 's');

      return '' + count + ' ' + word;
    }

    function specHref(result) {
      return addToExistingQueryString('spec', result.fullName);
    }

    function seedHref(seed) {
      return addToExistingQueryString('seed', seed);
    }

    function defaultQueryString(key, value) {
      return '?' + key + '=' + value;
    }

    function setMenuModeTo(mode) {
      htmlReporterMain.setAttribute('class', 'jasmine_html-reporter ' + mode);
    }

    function noExpectations(result) {
      return (result.failedExpectations.length + result.passedExpectations.length) === 0 &&
        result.status === 'passed';
    }
  }

  return HtmlReporter;
};

jasmineRequire.HtmlSpecFilter = function() {
  function HtmlSpecFilter(options) {
    var filterString = options && options.filterString() && options.filterString().replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
    var filterPattern = new RegExp(filterString);

    this.matches = function(specName) {
      return filterPattern.test(specName);
    };
  }

  return HtmlSpecFilter;
};

jasmineRequire.ResultsNode = function() {
  function ResultsNode(result, type, parent) {
    this.result = result;
    this.type = type;
    this.parent = parent;

    this.children = [];

    this.addChild = function(result, type) {
      this.children.push(new ResultsNode(result, type, this));
    };

    this.last = function() {
      return this.children[this.children.length - 1];
    };
  }

  return ResultsNode;
};

jasmineRequire.QueryString = function() {
  function QueryString(options) {

    this.navigateWithNewParam = function(key, value) {
      options.getWindowLocation().search = this.fullStringWithNewParam(key, value);
    };

    this.fullStringWithNewParam = function(key, value) {
      var paramMap = queryStringToParamMap();
      paramMap[key] = value;
      return toQueryString(paramMap);
    };

    this.getParam = function(key) {
      return queryStringToParamMap()[key];
    };

    return this;

    function toQueryString(paramMap) {
      var qStrPairs = [];
      for (var prop in paramMap) {
        qStrPairs.push(encodeURIComponent(prop) + '=' + encodeURIComponent(paramMap[prop]));
      }
      return '?' + qStrPairs.join('&');
    }

    function queryStringToParamMap() {
      var paramStr = options.getWindowLocation().search.substring(1),
        params = [],
        paramMap = {};

      if (paramStr.length > 0) {
        params = paramStr.split('&');
        for (var i = 0; i < params.length; i++) {
          var p = params[i].split('=');
          var value = decodeURIComponent(p[1]);
          if (value === 'true' || value === 'false') {
            value = JSON.parse(value);
          }
          paramMap[decodeURIComponent(p[0])] = value;
        }
      }

      return paramMap;
    }

  }

  return QueryString;
};
`;

const jasmineBoot = `
/*
Copyright (c) 2008-2015 Pivotal Labs

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
/**
 Starting with version 2.0, this file "boots" Jasmine, performing all of the necessary initialization before executing the loaded environment and all of a project's specs. This file should be loaded after \`jasmine.js\` and \`jasmine_html.js\`, but before any project source files or spec files are loaded. Thus this file can also be used to customize Jasmine for a project.

 If a project is using Jasmine via the standalone distribution, this file can be customized directly. If a project is using Jasmine via the [Ruby gem][jasmine-gem], this file can be copied into the support directory via \`jasmine copy_boot_js\`. Other environments (e.g., Python) will have different mechanisms.

 The location of \`boot.js\` can be specified and/or overridden in \`jasmine.yml\`.

 [jasmine-gem]: http://github.com/pivotal/jasmine-gem
 */

(function() {

  /**
   * ## Require &amp; Instantiate
   *
   * Require Jasmine's core files. Specifically, this requires and attaches all of Jasmine's code to the \`jasmine\` reference.
   */
  window.jasmine = jasmineRequire.core(jasmineRequire);

  /**
   * Since this is being run in a browser and the results should populate to an HTML page, require the HTML-specific Jasmine code, injecting the same reference.
   */
  jasmineRequire.html(jasmine);

  /**
   * Create the Jasmine environment. This is used to run all specs in a project.
   */
  var env = jasmine.getEnv();

  /**
   * ## The Global Interface
   *
   * Build up the functions that will be exposed as the Jasmine public interface. A project can customize, rename or alias any of these functions as desired, provided the implementation remains unchanged.
   */
  var jasmineInterface = jasmineRequire.interface(jasmine, env);

  /**
   * Add all of the Jasmine global/public interface to the global scope, so a project can use the public interface directly. For example, calling \`describe\` in specs instead of \`jasmine.getEnv().describe\`.
   */
  extend(window, jasmineInterface);

  /**
   * ## Runner Parameters
   *
   * More browser specific code - wrap the query string in an object and to allow for getting/setting parameters from the runner user interface.
   */

  var queryString = new jasmine.QueryString({
    getWindowLocation: function() { return window.location; }
  });

  var catchingExceptions = queryString.getParam("catch");
  env.catchExceptions(typeof catchingExceptions === "undefined" ? true : catchingExceptions);

  var throwingExpectationFailures = queryString.getParam("throwFailures");
  env.throwOnExpectationFailure(throwingExpectationFailures);

  var random = queryString.getParam("random");
  env.randomizeTests(random);

  var seed = queryString.getParam("seed");
  if (seed) {
    env.seed(seed);
  }

  /**
   * ## Reporters
   * The \`HtmlReporter\` builds all of the HTML UI for the runner page. This reporter paints the dots, stars, and x's for specs, as well as all spec names and all failures (if any).
   */
  var htmlReporter = new jasmine.HtmlReporter({
    env: env,
    onRaiseExceptionsClick: function() { queryString.navigateWithNewParam("catch", !env.catchingExceptions()); },
    onThrowExpectationsClick: function() { queryString.navigateWithNewParam("throwFailures", !env.throwingExpectationFailures()); },
    onRandomClick: function() { queryString.navigateWithNewParam("random", !env.randomTests()); },
    addToExistingQueryString: function(key, value) { return queryString.fullStringWithNewParam(key, value); },
    getContainer: function() { return document.body; },
    createElement: function() { return document.createElement.apply(document, arguments); },
    createTextNode: function() { return document.createTextNode.apply(document, arguments); },
    timer: new jasmine.Timer()
  });

  /**
   * The \`jsApiReporter\` also receives spec results, and is used by any environment that needs to extract the results  from JavaScript.
   */
  env.addReporter(jasmineInterface.jsApiReporter);
  env.addReporter(htmlReporter);

  /**
   * Filter which specs will be run by matching the start of the full name against the \`spec\` query param.
   */
  var specFilter = new jasmine.HtmlSpecFilter({
    filterString: function() { return queryString.getParam("spec"); }
  });

  env.specFilter = function(spec) {
    return specFilter.matches(spec.getFullName());
  };

  /**
   * Setting up timing functions to be able to be overridden. Certain browsers (Safari, IE 8, phantomjs) require this hack.
   */
  window.setTimeout = window.setTimeout;
  window.setInterval = window.setInterval;
  window.clearTimeout = window.clearTimeout;
  window.clearInterval = window.clearInterval;

  /**
   * ## Execution
   *
   * Replace the browser window's \`onload\`, ensure it's called, and then run all of the loaded specs. This includes initializing the \`HtmlReporter\` instance and then executing the loaded Jasmine environment. All of this will happen after all of the specs are loaded.
   */
  var currentWindowOnload = window.onload;

  window.onload = function() {
    if (currentWindowOnload) {
      currentWindowOnload();
    }
    htmlReporter.initialize();
    env.execute();
  };

  /**
   * Helper function for readability above.
   */
  function extend(destination, source) {
    for (var property in source) destination[property] = source[property];
    return destination;
  }

}());
`;

export default function getHandler() {
    return function handler(context) {
        if (context.getUrlPath() === '/jasmine.js') {
            let code = `
                var style = document.createElement('style');
                document.head.appendChild(style);
                style.textContent = '${jasmineCss}';

                ${jasmineJs}
                ${jasmineHtmlJs}
                ${jasmineBoot}
            `;
            context.js(code);
        }
    };
}
