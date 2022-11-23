import cfg from "./cfg";
import pg from "pg";


const conString = cfg.pg_connection;

var client = new pg.Client(conString);
client.connect();

export default client;