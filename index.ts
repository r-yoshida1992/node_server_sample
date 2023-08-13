import os from 'os';
import http, {IncomingMessage, ServerResponse} from 'http';
const port = 3000;

// Create a server
export const server = http.createServer((req: IncomingMessage, res: ServerResponse) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  let message = '<html style="background-color:#000; color:#0f0; font-family:monospace; font-weight:900; font-size:18">';
  message += `<h1 style="font-size:80px">Your Infos</h1>`;
  message += `<p>OS Name: ${os.platform}</p>`;
  message += `<p>OS Release: ${os.release}</p>`;
  message += `<p>OS CPU Architecture: ${os.arch}</p>`;
  message += `<p>OS Uptime: ${os.uptime}</p>`;
  message += `<p>OS Total Memory: ${os.totalmem}</p>`;
  message += `<p>OS Free Memory: ${os.freemem}</p>`;
  message += `<p>OS Endianness: ${os.endianness}</p>`;
  message += `<p>OS Hostname: ${os.hostname}</p>`;
  message += `<p>OS Temp Directory: ${os.tmpdir}</p>`;
  message += `<p>OS Type: ${os.type}</p>`;
  message += `<p>OS Version: ${os.version}</p>`;
  message += `<p>OS EOL: ${os.EOL}</p>`;
  message += `<p>Clients IP Address: ${req.connection.remoteAddress}</p>`;
  message += `<p>Server Port: ${req.connection.localPort}</p>`;
  message += `<p>Server Address: ${req.connection.localAddress}</p>`;
  message += `<p>Server Bytes Read: ${req.connection.bytesRead}</p>`;
  message += `<p>Server Bytes Written: ${req.connection.bytesWritten}</p>`;
  message += `<p>Server Local Address: ${req.connection.localAddress}</p>`;
  message += `<p>Server Local Port: ${req.connection.localPort}</p>`;
  message += `<p>Server Remote Address: ${req.connection.remoteAddress}</p>`;
  message += `<p>Server Remote Family: ${req.connection.remoteFamily}</p>`;
  message += `<p>Server Remote Port: ${req.connection.remotePort}</p>`;
  // get client remote address
  message += `<p>Client Remote Address: ${req.socket.remoteAddress}</p>`;
  message += `<p>Client Remote Family: ${req.socket.remoteFamily}</p>`;
  message += `<p>Client Remote Port: ${req.socket.remotePort}</p>`;
  message += `<p>Client Bytes Read: ${req.socket.bytesRead}</p>`;
  message += `<p>Client Bytes Written: ${req.socket.bytesWritten}</p>`;
  message += `<p>Client Local Address: ${req.socket.localAddress}</p>`;
  message += `<p>Client Local Port: ${req.socket.localPort}</p>`;

  message += `<p>Cookies: ${req.headers.cookie}</p>`;
  message += `<p>Host: ${req.headers.host}</p>`;
  message += `<p>Referer: ${req.headers.referer}</p>`;
  message += `<p>User-Agent: ${req.headers['user-agent']}</p>`;
  message += `<p>Accept: ${req.headers.accept}</p>`;
  message += `<p>Accept-Encoding: ${req.headers['accept-encoding']}</p>`;
  message += `<p>Accept-Language: ${req.headers['accept-language']}</p>`;
  message += `<p>Connection: ${req.headers.connection}</p>`;
  message += `<p>Content-Length: ${req.headers['content-length']}</p>`;
  message += `<p>Content-Type: ${req.headers['content-type']}</p>`;
  message += `<p>Origin: ${req.headers.origin}</p>`;
  message += `<p>Upgrade-Insecure-Requests: ${req.headers['upgrade-insecure-requests']}</p>`;
  message += `<p>Request Method: ${req.method}</p>`;
  message += `<p>Request URL: ${req.url}</p>`;
  message += `<p>Request HTTP Version: ${req.httpVersion}</p>`;
  message += `<p>Request HTTP Version Major: ${req.httpVersionMajor}</p>`;
  message += `<p>Request Complete: ${req.complete}</p>`;
  message += `<p>Request Readable: ${req.readable}</p>`;
  message += `<p>Request Aborted: ${req.aborted}</p>`;
  message += '</html>';
  res.end(message);
  console.log(`Sent a response : ${message}`);
});




server.listen(port);
console.log(`The server ps started and is listening on port number: ${port}`);
