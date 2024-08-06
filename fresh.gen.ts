// DO NOT EDIT. This file is generated by Fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import * as $_404 from "./routes/_404.tsx";
import * as $_app from "./routes/_app.tsx";
import * as $api_404 from "./routes/api/_404.ts";
import * as $api_bitcoin_notification from "./routes/api/bitcoin-notification.ts";
import * as $api_v2_404 from "./routes/api/v2/_404.ts";
import * as $api_v2_balance_address_ from "./routes/api/v2/balance/[address].ts";
import * as $api_v2_balance_getStampsBalance from "./routes/api/v2/balance/getStampsBalance.ts";
import * as $api_v2_block_block_index_ from "./routes/api/v2/block/[block_index].ts";
import * as $api_v2_block_block_count_number_ from "./routes/api/v2/block/block_count/[...number].ts";
import * as $api_v2_block_related_block_index_ from "./routes/api/v2/block/related/[block_index].ts";
import * as $api_v2_collections_index from "./routes/api/v2/collections/index.ts";
import * as $api_v2_cursed_id_ from "./routes/api/v2/cursed/[id].ts";
import * as $api_v2_cursed_block_block_index_ from "./routes/api/v2/cursed/block/[block_index].ts";
import * as $api_v2_cursed_index from "./routes/api/v2/cursed/index.ts";
import * as $api_v2_docs from "./routes/api/v2/docs.ts";
import * as $api_v2_error from "./routes/api/v2/error.ts";
import * as $api_v2_health from "./routes/api/v2/health.ts";
import * as $api_v2_olga_mint from "./routes/api/v2/olga/mint.ts";
import * as $api_v2_src20_balance_address_ from "./routes/api/v2/src20/balance/[address].ts";
import * as $api_v2_src20_balance_address_tick_ from "./routes/api/v2/src20/balance/[address]/[tick].ts";
import * as $api_v2_src20_balance_snapshot_tick_ from "./routes/api/v2/src20/balance/snapshot/[tick].ts";
import * as $api_v2_src20_block_block_index_tick_ from "./routes/api/v2/src20/block/[block_index]/[tick].ts";
import * as $api_v2_src20_block_block_index_index from "./routes/api/v2/src20/block/[block_index]/index.ts";
import * as $api_v2_src20_create from "./routes/api/v2/src20/create.ts";
import * as $api_v2_src20_index from "./routes/api/v2/src20/index.ts";
import * as $api_v2_src20_tick_tick_deploy from "./routes/api/v2/src20/tick/[tick]/deploy.ts";
import * as $api_v2_src20_tick_tick_index from "./routes/api/v2/src20/tick/[tick]/index.ts";
import * as $api_v2_src20_tick_index from "./routes/api/v2/src20/tick/index.ts";
import * as $api_v2_src20_tx_tx_hash_ from "./routes/api/v2/src20/tx/[tx_hash].ts";
import * as $api_v2_stamps_id_ from "./routes/api/v2/stamps/[id].ts";
import * as $api_v2_stamps_balance_address_ from "./routes/api/v2/stamps/balance/[address].tsx";
import * as $api_v2_stamps_block_block_index_ from "./routes/api/v2/stamps/block/[block_index].ts";
import * as $api_v2_stamps_dispensers_id_ from "./routes/api/v2/stamps/dispensers/[id].ts";
import * as $api_v2_stamps_dispensers_index from "./routes/api/v2/stamps/dispensers/index.ts";
import * as $api_v2_stamps_ident_ident_ from "./routes/api/v2/stamps/ident/[ident].ts";
import * as $api_v2_stamps_index from "./routes/api/v2/stamps/index.ts";
import * as $api_v2_version from "./routes/api/v2/version.ts";
import * as $block_id_ from "./routes/block/[id].tsx";
import * as $block_index from "./routes/block/index.tsx";
import * as $collection_id_ from "./routes/collection/[id].tsx";
import * as $collection_index from "./routes/collection/index.tsx";
import * as $content_imgpath_ from "./routes/content/[...imgpath].tsx";
import * as $docs_index from "./routes/docs/index.tsx";
import * as $handlers_sharedBlockHandler from "./routes/handlers/sharedBlockHandler.ts";
import * as $handlers_sharedCollectionHandler from "./routes/handlers/sharedCollectionHandler.ts";
import * as $handlers_sharedStampHandler from "./routes/handlers/sharedStampHandler.ts";
import * as $home_index from "./routes/home/index.tsx";
import * as $index from "./routes/index.tsx";
import * as $quicknode_getPrice from "./routes/quicknode/getPrice.ts";
import * as $s_id_ from "./routes/s/[...id].tsx";
import * as $src20_tick_ from "./routes/src20/[tick].tsx";
import * as $src20_index from "./routes/src20/index.tsx";
import * as $stamp_id_ from "./routes/stamp/[id].tsx";
import * as $stamp_index from "./routes/stamp/index.tsx";
import * as $stamp_tool from "./routes/stamp/tool.tsx";
import * as $stamping_index from "./routes/stamping/index.tsx";
import * as $upload_index from "./routes/upload/index.tsx";
import * as $wallet_address_ from "./routes/wallet/[address].tsx";
import * as $Carousel from "./islands/Carousel.tsx";
import * as $Footer from "./islands/Footer.tsx";
import * as $Header from "./islands/Header.tsx";
import * as $MempoolWeather from "./islands/MempoolWeather.tsx";
import * as $Navigator_navigator from "./islands/Navigator/navigator.tsx";
import * as $Toast_ToastComponent from "./islands/Toast/ToastComponent.tsx";
import * as $Toast_toast from "./islands/Toast/toast.tsx";
import * as $Wallet_ConnectWallet from "./islands/Wallet/ConnectWallet.tsx";
import * as $Wallet_ConnectedModal from "./islands/Wallet/ConnectedModal.tsx";
import * as $Wallet_ConnectorsModal from "./islands/Wallet/ConnectorsModal.tsx";
import * as $Wallet_WalletModal from "./islands/Wallet/WalletModal.tsx";
import * as $Wallet_connectors_Wallet_connector from "./islands/Wallet/connectors/Wallet.connector.tsx";
import * as $Wallet_details_HistoryContent from "./islands/Wallet/details/HistoryContent.tsx";
import * as $Wallet_details_MyItemsContent from "./islands/Wallet/details/MyItemsContent.tsx";
import * as $Wallet_details_TransactionsContent from "./islands/Wallet/details/TransactionsContent.tsx";
import * as $Wallet_details_WalletHeader from "./islands/Wallet/details/WalletHeader.tsx";
import * as $block_BlockHeader from "./islands/block/BlockHeader.tsx";
import * as $block_BlockSelector from "./islands/block/BlockSelector.tsx";
import * as $block_BlockTransactions from "./islands/block/BlockTransactions.tsx";
import * as $collection_CollectionCreateButton from "./islands/collection/CollectionCreateButton.tsx";
import * as $collection_CollectionDetailsContent from "./islands/collection/CollectionDetailsContent.tsx";
import * as $collection_CollectionDetailsHeader from "./islands/collection/CollectionDetailsHeader.tsx";
import * as $collection_CollectionHeader from "./islands/collection/CollectionHeader.tsx";
import * as $collection_CollectionList from "./islands/collection/CollectionList.tsx";
import * as $home_HomeCarousel from "./islands/home/HomeCarousel.tsx";
import * as $home_HomeHeader from "./islands/home/HomeHeader.tsx";
import * as $home_HomeStampPreview from "./islands/home/HomeStampPreview.tsx";
import * as $home_HomeStampPreviewDetails from "./islands/home/HomeStampPreviewDetails.tsx";
import * as $home_HomeTable from "./islands/home/HomeTable.tsx";
import * as $hooks_useFeePolling from "./islands/hooks/useFeePolling.tsx";
import * as $mint_DeployContent from "./islands/mint/DeployContent.tsx";
import * as $mint_MintContent from "./islands/mint/MintContent.tsx";
import * as $mint_MintHeader from "./islands/mint/MintHeader.tsx";
import * as $mint_TransferContent from "./islands/mint/TransferContent.tsx";
import * as $src20_SRC20DeployTable from "./islands/src20/SRC20DeployTable.tsx";
import * as $src20_SRC20DetailsTab from "./islands/src20/SRC20DetailsTab.tsx";
import * as $src20_SRC20Header from "./islands/src20/SRC20Header.tsx";
import * as $stamp_StampContent from "./islands/stamp/StampContent.tsx";
import * as $stamp_StampHeader from "./islands/stamp/StampHeader.tsx";
import * as $stamp_StampNavigator from "./islands/stamp/StampNavigator.tsx";
import * as $stamp_StampSearch from "./islands/stamp/StampSearch.tsx";
import * as $stamp_tool_FileContent from "./islands/stamp/tool/FileContent.tsx";
import * as $stamp_tool_StampToolHeader from "./islands/stamp/tool/StampToolHeader.tsx";
import * as $upload_UploadImageHeader from "./islands/upload/UploadImageHeader.tsx";
import * as $upload_UploadImageTable from "./islands/upload/UploadImageTable.tsx";
import * as $upload_UploadTickHeader from "./islands/upload/UploadTickHeader.tsx";
import { type Manifest } from "$fresh/server.ts";

const manifest = {
  routes: {
    "./routes/_404.tsx": $_404,
    "./routes/_app.tsx": $_app,
    "./routes/api/_404.ts": $api_404,
    "./routes/api/bitcoin-notification.ts": $api_bitcoin_notification,
    "./routes/api/v2/_404.ts": $api_v2_404,
    "./routes/api/v2/balance/[address].ts": $api_v2_balance_address_,
    "./routes/api/v2/balance/getStampsBalance.ts":
      $api_v2_balance_getStampsBalance,
    "./routes/api/v2/block/[block_index].ts": $api_v2_block_block_index_,
    "./routes/api/v2/block/block_count/[...number].ts":
      $api_v2_block_block_count_number_,
    "./routes/api/v2/block/related/[block_index].ts":
      $api_v2_block_related_block_index_,
    "./routes/api/v2/collections/index.ts": $api_v2_collections_index,
    "./routes/api/v2/cursed/[id].ts": $api_v2_cursed_id_,
    "./routes/api/v2/cursed/block/[block_index].ts":
      $api_v2_cursed_block_block_index_,
    "./routes/api/v2/cursed/index.ts": $api_v2_cursed_index,
    "./routes/api/v2/docs.ts": $api_v2_docs,
    "./routes/api/v2/error.ts": $api_v2_error,
    "./routes/api/v2/health.ts": $api_v2_health,
    "./routes/api/v2/olga/mint.ts": $api_v2_olga_mint,
    "./routes/api/v2/src20/balance/[address].ts":
      $api_v2_src20_balance_address_,
    "./routes/api/v2/src20/balance/[address]/[tick].ts":
      $api_v2_src20_balance_address_tick_,
    "./routes/api/v2/src20/balance/snapshot/[tick].ts":
      $api_v2_src20_balance_snapshot_tick_,
    "./routes/api/v2/src20/block/[block_index]/[tick].ts":
      $api_v2_src20_block_block_index_tick_,
    "./routes/api/v2/src20/block/[block_index]/index.ts":
      $api_v2_src20_block_block_index_index,
    "./routes/api/v2/src20/create.ts": $api_v2_src20_create,
    "./routes/api/v2/src20/index.ts": $api_v2_src20_index,
    "./routes/api/v2/src20/tick/[tick]/deploy.ts":
      $api_v2_src20_tick_tick_deploy,
    "./routes/api/v2/src20/tick/[tick]/index.ts": $api_v2_src20_tick_tick_index,
    "./routes/api/v2/src20/tick/index.ts": $api_v2_src20_tick_index,
    "./routes/api/v2/src20/tx/[tx_hash].ts": $api_v2_src20_tx_tx_hash_,
    "./routes/api/v2/stamps/[id].ts": $api_v2_stamps_id_,
    "./routes/api/v2/stamps/balance/[address].tsx":
      $api_v2_stamps_balance_address_,
    "./routes/api/v2/stamps/block/[block_index].ts":
      $api_v2_stamps_block_block_index_,
    "./routes/api/v2/stamps/dispensers/[id].ts": $api_v2_stamps_dispensers_id_,
    "./routes/api/v2/stamps/dispensers/index.ts":
      $api_v2_stamps_dispensers_index,
    "./routes/api/v2/stamps/ident/[ident].ts": $api_v2_stamps_ident_ident_,
    "./routes/api/v2/stamps/index.ts": $api_v2_stamps_index,
    "./routes/api/v2/version.ts": $api_v2_version,
    "./routes/block/[id].tsx": $block_id_,
    "./routes/block/index.tsx": $block_index,
    "./routes/collection/[id].tsx": $collection_id_,
    "./routes/collection/index.tsx": $collection_index,
    "./routes/content/[...imgpath].tsx": $content_imgpath_,
    "./routes/docs/index.tsx": $docs_index,
    "./routes/handlers/sharedBlockHandler.ts": $handlers_sharedBlockHandler,
    "./routes/handlers/sharedCollectionHandler.ts":
      $handlers_sharedCollectionHandler,
    "./routes/handlers/sharedStampHandler.ts": $handlers_sharedStampHandler,
    "./routes/home/index.tsx": $home_index,
    "./routes/index.tsx": $index,
    "./routes/quicknode/getPrice.ts": $quicknode_getPrice,
    "./routes/s/[...id].tsx": $s_id_,
    "./routes/src20/[tick].tsx": $src20_tick_,
    "./routes/src20/index.tsx": $src20_index,
    "./routes/stamp/[id].tsx": $stamp_id_,
    "./routes/stamp/index.tsx": $stamp_index,
    "./routes/stamp/tool.tsx": $stamp_tool,
    "./routes/stamping/index.tsx": $stamping_index,
    "./routes/upload/index.tsx": $upload_index,
    "./routes/wallet/[address].tsx": $wallet_address_,
  },
  islands: {
    "./islands/Carousel.tsx": $Carousel,
    "./islands/Footer.tsx": $Footer,
    "./islands/Header.tsx": $Header,
    "./islands/MempoolWeather.tsx": $MempoolWeather,
    "./islands/Navigator/navigator.tsx": $Navigator_navigator,
    "./islands/Toast/ToastComponent.tsx": $Toast_ToastComponent,
    "./islands/Toast/toast.tsx": $Toast_toast,
    "./islands/Wallet/ConnectWallet.tsx": $Wallet_ConnectWallet,
    "./islands/Wallet/ConnectedModal.tsx": $Wallet_ConnectedModal,
    "./islands/Wallet/ConnectorsModal.tsx": $Wallet_ConnectorsModal,
    "./islands/Wallet/WalletModal.tsx": $Wallet_WalletModal,
    "./islands/Wallet/connectors/Wallet.connector.tsx":
      $Wallet_connectors_Wallet_connector,
    "./islands/Wallet/details/HistoryContent.tsx":
      $Wallet_details_HistoryContent,
    "./islands/Wallet/details/MyItemsContent.tsx":
      $Wallet_details_MyItemsContent,
    "./islands/Wallet/details/TransactionsContent.tsx":
      $Wallet_details_TransactionsContent,
    "./islands/Wallet/details/WalletHeader.tsx": $Wallet_details_WalletHeader,
    "./islands/block/BlockHeader.tsx": $block_BlockHeader,
    "./islands/block/BlockSelector.tsx": $block_BlockSelector,
    "./islands/block/BlockTransactions.tsx": $block_BlockTransactions,
    "./islands/collection/CollectionCreateButton.tsx":
      $collection_CollectionCreateButton,
    "./islands/collection/CollectionDetailsContent.tsx":
      $collection_CollectionDetailsContent,
    "./islands/collection/CollectionDetailsHeader.tsx":
      $collection_CollectionDetailsHeader,
    "./islands/collection/CollectionHeader.tsx": $collection_CollectionHeader,
    "./islands/collection/CollectionList.tsx": $collection_CollectionList,
    "./islands/home/HomeCarousel.tsx": $home_HomeCarousel,
    "./islands/home/HomeHeader.tsx": $home_HomeHeader,
    "./islands/home/HomeStampPreview.tsx": $home_HomeStampPreview,
    "./islands/home/HomeStampPreviewDetails.tsx": $home_HomeStampPreviewDetails,
    "./islands/home/HomeTable.tsx": $home_HomeTable,
    "./islands/hooks/useFeePolling.tsx": $hooks_useFeePolling,
    "./islands/mint/DeployContent.tsx": $mint_DeployContent,
    "./islands/mint/MintContent.tsx": $mint_MintContent,
    "./islands/mint/MintHeader.tsx": $mint_MintHeader,
    "./islands/mint/TransferContent.tsx": $mint_TransferContent,
    "./islands/src20/SRC20DeployTable.tsx": $src20_SRC20DeployTable,
    "./islands/src20/SRC20DetailsTab.tsx": $src20_SRC20DetailsTab,
    "./islands/src20/SRC20Header.tsx": $src20_SRC20Header,
    "./islands/stamp/StampContent.tsx": $stamp_StampContent,
    "./islands/stamp/StampHeader.tsx": $stamp_StampHeader,
    "./islands/stamp/StampNavigator.tsx": $stamp_StampNavigator,
    "./islands/stamp/StampSearch.tsx": $stamp_StampSearch,
    "./islands/stamp/tool/FileContent.tsx": $stamp_tool_FileContent,
    "./islands/stamp/tool/StampToolHeader.tsx": $stamp_tool_StampToolHeader,
    "./islands/upload/UploadImageHeader.tsx": $upload_UploadImageHeader,
    "./islands/upload/UploadImageTable.tsx": $upload_UploadImageTable,
    "./islands/upload/UploadTickHeader.tsx": $upload_UploadTickHeader,
  },
  baseUrl: import.meta.url,
} satisfies Manifest;

export default manifest;
