import shutil
import datetime
from paramiko import SSHClient
from scp import SCPClient


class _Settings:
    SSH_HOSTNAME = '0.0.0.0'
    SSH_PORT = 22
    SSH_USER = 'example'
    SSH_PASSWORD = 'example'
    BUILD_DATE = datetime.datetime.now().strftime("%Y-%m-%d_%H-%M-%S")
    ARCHIVE_NAME = 'ui-{}.zip'.format(BUILD_DATE)
    SSH_FILE_LOCATION = '/home/igor/upload/{}'.format(ARCHIVE_NAME)


def build_archive():
    shutil.make_archive('./../deploy/ui-{}'.format(_Settings.BUILD_DATE), 'zip', './../build')
    print('Archive is ready')


def upload_on_cloud():
    ssh = SSHClient()
    ssh.load_system_host_keys()
    ssh.connect(hostname=_Settings.SSH_HOSTNAME,
                port=_Settings.SSH_PORT,
                username=_Settings.SSH_USER,
                password=_Settings.SSH_PASSWORD)

    scp = SCPClient(ssh.get_transport())

    scp.put('./../deploy/{0}'.format(_Settings.ARCHIVE_NAME), _Settings.SSH_FILE_LOCATION)
    # scp.get('file_path_on_remote_machine', 'file_path_on_local_machine')
    scp.close()

    print('Uploaded')


if __name__ == '__main__':
    build_archive()
    upload_on_cloud()
