import io
import os

import librosa
import numpy as np
import functions_framework
from google.cloud import storage



@functions_framework.http
def process_file(request):
    request_json = request.get_json(silent=True)

    bucket_name = request_json['bucket']
    object_name = request_json['name']
    print(f'Input: ${bucket_name}/{object_name}')

    print('Get storage client')
    storage_client = storage.Client()
    bucket = storage_client.bucket(bucket_name)
    blob = bucket.blob(object_name)

    print('Read and decode')
    with blob.open('rb') as f:
        input_frames, _ = librosa.load(f, sr=16_000, mono=True, dtype=np.float32)

    print('Embed')
    embeddings = np.random.random((30, 256))

    print(f'Returning {embeddings.shape}')

    return {
        'base_name': os.path.basename(object_name),
        'embeddings': list(map(list, embeddings))
    }
