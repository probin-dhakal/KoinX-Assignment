# Crypto API

This API provides endpoints to fetch cryptocurrency data and calculate the standard deviation of cryptocurrency prices. The available endpoints are:

## Endpoints

### 1. **Get Cryptocurrency Stats** (`/stats`)

Fetches the latest stats for a specified cryptocurrency, including its price, market cap, and 24-hour change.

- **URL**: `/api/v1/crypto/stats`
- **Method**: `GET`
- **Query Parameters**:
  - `coin` (required): The cryptocurrency you want to get stats for. Possible values: `bitcoin`, `ethereum`, `matic-network`.

#### Example Request:

```bash
GET http://localhost:8005/api/v1/crypto/stats?coin=bitcoin



