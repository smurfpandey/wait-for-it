# wait-for-it
This action allows you to wait for availability of a host and TCP port. This is a actions wrapper for [vishnubob/wait-for-it](https://github.com/vishnubob/wait-for-it).

## Inputs

### `host`

**Required** - _string_\
Host or IP under test.

### `port`

**Required** - _integer_\
TCP port under test.

### `timeout`

_Optional_ - _integer_\
Timeout in seconds, zero for no timeout. Default `10`.


## Example usage

### Using all available options

```yaml
uses: smurfpandey/wait-for-it@master
with:
  host: www.gogle.com
  port: 80
  timeout: 10
```