# Clientes Izie

Aplicativo teste para entrar na Izie. Vamos nessa!

## Comentários ##

Gostei muito de fazer esse aplicativo, desde a parte da concepção visual até o frontend/backend final. Não consegui concluir o projeto por vários motivos, mas gostei do resultado. Não consegui integrar com a API (expliquei melhor no README da API), não consegui fazer uma funcionalidade aceitável para carregamento de fotos e esqueci de colocar meio de editar e excluir clientes e endereços (só me dei conta já na última versão, mas não dava mais tempo), mas acho que valei para a mostrar parte do meu trabalho.

## Meu Processo de Build ##

Algumas coisas tiveram que ser diferentes do que é "ensinado" na documentação do Ionic. Como forcei o uso de uma versão do Ionic e do Cordova para ficar no Ionic 1, algumas coisinhas tiveram que ser feitas de maneira diferente, a começar por vários passos de instalação do ambiente.

Detalhe que estava trabalhando no linux, então só consegui compilar APK para Android.

#0 Pré-build - Gerando chave de assinatura

$ keytool -genkey -v -keystore my-release-key.keystore -alias marcus_domingos -keyalg RSA -keysize 2048 -validity 10000

Fiz uma cópia do arquivo "my-release-key" e coloquei na pasta APK da build do android para facilitar o processo.

#1 Build Debug APK

$ ionic build android

#2 Build Release APK

$ cordova build --release android

#3 Assinar a Build

Dentro da pasta platforms/android/builds/output/apk:

$ jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore my-release-key.keystore android-release-unsigned.apk Marcus_Domingos

#4 Compactar o APK

Aqui tive que fazer alguns ajustes para executar o zipalign dentro do JDK e aplicar no arquivo android-release-unsigned.apk a compactação e gerando o arquivo ClientesIziev1.2.1.apk.

$ /path/Android/Sdk/build-tools/25.0.3/./zipalign -v 4 /path/clientes_izie/platforms/android/build/outputs/apk/android-release-unsigned.apk /path/clientes_izie/platforms/android/build/outputs/apk/ClientesIziev1.2.1.apk

## Versões ##

Tem uma branch para cada versão conforme pedido para o teste. Da mesma forma, criei uma pasta chamada "releases" na raiz do projeto, contendo o APK específico de cada versão, visto que não subi as pastas de "plataforms" no projeto para não ficar muito extenso.

v1.1.1 (branch versao-1)
Todas as telas do requisito, com os campos Nome, Data de Nascimento e Foto do Cliente. Todas as informações dessa versão são estáticas, ainda não apresenta API.

v1.2.1 (branch versao-2)
Nessa versão foram acrescentados os campos de E-mail e CPF no cadastro do Cliente. Todas as informações dessa versão são estáticas, ainda não apresenta API.

v1.3.1 (branch versao-3)

## Agradecimento ##

Desde já agradeço a oportunidade e a atenção.

Abraço!
Marcus Domingos