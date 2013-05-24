function FindProxyForURL(url, host)
{
  // variable strings to return
  var proxy_yes = "PROXY prx.carlosedp.com:8888";
  var proxy_no = "DIRECT";
  if (shExpMatch(url, "*.radio.com*")) { return proxy_yes; }
  if (shExpMatch(url, "*.cbslocal.com*")) { return proxy_yes; }
  if (shExpMatch(url, "*whatsmyip.org*")) { return proxy_yes; }
  if (shExpMatch(url, "*streamtheworld.com*")) { return proxy_yes; }
  if (shExpMatch(url, "*targetspot.com*")) { return proxy_yes; }
  if (shExpMatch(url, "*spotify.com*")) { return proxy_yes; }
  if (shExpMatch(url, "*iheart.com*")) { return proxy_yes; }
  if (shExpMatch(url, "*ccomrcdn.com*")) { return proxy_yes; }

  // Proxy anything else
  return proxy_no;
}


